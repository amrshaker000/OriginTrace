from fastapi import FastAPI
from pydantic import BaseModel
from typing import Union
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import json
import re

# ========== Request Model ==========
class MessageRequest(BaseModel):
    user_message: str

# ========== Init FastAPI ==========
app = FastAPI(title="Phi3 Model API")

# ========== Load model ==========
model_name = "Rawan7/icp_ai_agent" 
#tokenizer = AutoTokenizer.from_pretrained(model_name)
#model = AutoModelForCausalLM.from_pretrained(model_name).to(
   # "cuda" if torch.cuda.is_available() else "cpu"
#)
device = "cuda" if torch.cuda.is_available() else "cpu"

model = AutoModelForCausalLM.from_pretrained(
    model_name,
    device_map="auto",           
    torch_dtype=torch.float16,   
    low_cpu_mem_usage=True       #
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# ========================
#  Few-Shot Examples for Each Case
# ========================
few_shots_dict = {
    "device_budget_use": [
        {
            "role": "user",
            "content": "Looking for a $770 laptop for graphic design"
        },
        {
            "role": "assistant",
            "content": """{
  "device_type": "Laptop",
  "primary_use": "Graphic Design",
  "budget_usd": 770,
  "hard_constraints": [],
  "soft_preferences": [],
  "must_not_have": []
}"""
        }
    ],
    "explain_part": [
        {
            "role": "user",
            "content": "Text: Explain memory specs of Dell Latitude 9520"
        },
        {
            "role": "assistant",
            "content": """{
  "intent": "explain_part",
  "device": "Dell Latitude 9520",
  "part": "memory"
}"""
        }
    ],
        "device_specs": [
        {
            "role": "user",
            "content": """JSON: {"device_type": "Mobile", "component": "camera", "specs": {"rear_camera": "200MP", "front_camera": "60MP", "camera_test_logs": ["Rear functional", "Front functional"], "face_id_touch_id": "Face ID supported"}}"""
        },
        {
            "role": "assistant",
            "content": """Phone has 200MP rear and 60MP front cameras. Both functional. Face ID supported. Excellent for photography, selfies, and secure unlocking."""
        }
    ]
}
# ========================
#  Helper Functions
# ========================
def select_few_shot(message_type: str):
    """Select few-shot examples based on message type."""
    return few_shots_dict.get(message_type, [])
    

def classify_message_with_llm(user_message: str) -> str:
    """
    Classify the user message into one of three types using the LLM.

    Returns:
        str: One of "device_budget_use", "explain_part", or "device_specs".
             Defaults to "device_budget_use" if classification fails.
    """
    prompt = f"""
Classify the following message into one of three types:
1. device budget/use inquiry
2. Explain device part
3. device JSON specification

Message: "{user_message}"

Return only the type label as one of:  device_budget_use, explain_part,device_specs.
"""
    # Generate the model output
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    outputs = model.generate(**inputs, max_new_tokens=10)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True).strip()

    # Extract only the valid label, ignoring extra words like "Solution:"
    match = re.search(r'Solution:\s*(\w+)', response, re.IGNORECASE)
    if match:
        return match.group(1).lower() 
def extract_last_json_or_text(response_text: str, detected_type: str) -> Union[dict, str]:
    
    #  JSON
    json_matches = re.findall(r'\{.*?\}', response_text, re.DOTALL)
    
    if not json_matches:
        return response_text.strip()

    if detected_type == "device_specs":
       
        last_json_str = json_matches[-1]
        split_text = response_text.split(last_json_str, 1)
        if len(split_text) > 1:
            raw_text = split_text[-1].strip() 
            clean_text = re.split(r"'\s*,?\s*['\"]?detected_type['\"]?\s*:", raw_text)[0]
            clean_text = clean_text.strip(" ,}'\n")
            return clean_text
        return response_text.strip()
    else:
       
        last_json_str = json_matches[-1]
        try:
            return json.loads(last_json_str)
        except json.JSONDecodeError:
            return last_json_str
def generate_response(user_message: str) -> dict:
    """
    Generate model response for a user message using few-shot examples.
    Extracts the last JSON from the model output if present.
    """

    message_type = classify_message_with_llm(user_message)

    # Select few-shot examples
    few_shots = select_few_shot(message_type)

    if not few_shots:
        return {"error": "No matching few-shot found"}

    #  Prepare conversation
    new_query = {"role": "user", "content": user_message}
    messages = few_shots + [new_query]

    #  Build prompt and generate response
    prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    outputs = model.generate(**inputs, max_new_tokens=256)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    #  Extract last JSON if present (or return text)
    final_output = extract_last_json_or_text(response,message_type)

    #  Return response
    return final_output # dict if JSON, otherwise str

# ========== API Endpoint ==========
@app.post("/generate")
def generate(request: MessageRequest):
    user_message = request.user_message
    try:
        response = generate_response(user_message)  
        return {"response": response}
    except Exception as e:
        return {"error": str(e)}