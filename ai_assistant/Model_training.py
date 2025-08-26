# ============================================
#  import Libraries
# ============================================
from datasets import load_dataset
from peft import LoraConfig, get_peft_model
from transformers import DataCollatorForLanguageModeling
from transformers import TrainingArguments, Trainer
from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import PeftModel
import torch
import wandb
from huggingface_hub import login
import os
HF_TOKEN = os.getenv("HF_TOKEN")
wandb.login(key="09a3cc7e2692b64115b1c5b7927c214ea70eba7d")
# ============================================
#  Load Dataset (train / validation)
# ============================================
train_dataset = load_dataset("json", data_files="train_dataset.jsonl")["train"].shuffle(seed=42)
eval_dataset  = load_dataset("json", data_files="val_dataset.jsonl")["train"].shuffle(seed=42)

# ----- Preprocess: Convert messages → conversation text -----
def format_messages(example):
    conversation = ""
    for msg in example["messages"]:
        if msg["role"] == "user":
            conversation += f"User: {msg['content']}\n"
        elif msg["role"] == "assistant":
            conversation += f"Assistant: {msg['content']}\n"
    return {"text": conversation}

train_dataset = train_dataset.map(format_messages)
eval_dataset  = eval_dataset.map(format_messages)
# ============================================
#  Load Model & Tokenizer (Phi-3 Mini)
# ============================================
model_id = "microsoft/Phi-3-mini-4k-instruct"

tokenizer = AutoTokenizer.from_pretrained(model_id)
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token  

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    device_map="auto",
    load_in_8bit=True 
)
# ============================================
#  Apply LoRA / PEFT
# ============================================
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules="all-linear",
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
# ============================================
#  Tokenization & Data Collator
# ============================================
def tokenize(batch):
    return tokenizer(
        batch["text"],
        padding="max_length",
        truncation=True,
        max_length=512
    )

train_dataset = train_dataset.map(tokenize, batched=True)
eval_dataset  = eval_dataset.map(tokenize, batched=True)

data_collator = DataCollatorForLanguageModeling(
    tokenizer=tokenizer,
    mlm=False,
    pad_to_multiple_of=8
)
# ============================================
#  Training Setup
# ============================================
training_args = TrainingArguments(
    output_dir="./phi3-lora",
    per_device_train_batch_size=2,
    gradient_accumulation_steps=8,
    num_train_epochs=3,
    learning_rate=2e-4,
    fp16=True,
    logging_steps=10,
    save_steps=500,
    save_total_limit=2,
    report_to="wandb",
   # evaluation_strategy="steps",
    #eval_steps=200
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
    data_collator=data_collator
)
# ============================================
#  Train
# ============================================
trainer.train()
# ============================================
#  Save LoRA Weights
# ============================================
model.save_pretrained("phi3-lora-adapter")
tokenizer.save_pretrained("phi3-lora-adapter")
# ============================================
#  Save full model
# ============================================
adapter_path = "phi3-lora-adapter"  
model = PeftModel.from_pretrained(model, adapter_path)
model.save_pretrained("phi3-final-model_full")
tokenizer.save_pretrained("phi3-final-model_full") 