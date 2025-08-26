# Phi3 AI Agent for OriginTrace

![Python](https://img.shields.io/badge/Python-3.11+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-High%20Performance-green)
![Hugging Face](https://img.shields.io/badge/HuggingFace-Model-orange)
![LoRA](https://img.shields.io/badge/LoRA-Fine--Tuned-purple)

---

## 🚀 Overview
The Phi3 AI Agent is a specialized backend interface for OriginTrace, leveraging the fine-tuned Phi-3 Mini model with LoRA adapters.  
This agent analyzes user inquiries and provides structured device recommendations based on their needs. It also translates complex technical specifications into clear, easy-to-understand language. The AI ensures accurate and real-time guidance for users making decisions about buying or selling used electronic devices, enabling a smarter, safer, and more transparent marketplace.

**Note:** The model was **trained locally** using `Model_training.py` and then **uploaded to Hugging Face Hub** for deployment.

---

## ✨ Features
- **Intelligent Device Recommendations:** Provides structured suggestions tailored to user needs, budgets, and usage scenarios.  
- **Technical Specification Interpretation:** Translates complex device specifications into simple, understandable language.  
- **Few-Shot Learning Support:** Uses example-based reasoning to handle diverse user queries accurately.  
- **Real-Time Guidance:** Delivers instant insights for buying or selling used electronic devices.  
- **Integration with OriginTrace:** Works seamlessly with the platform to ensure all advice aligns with certified device data.  
- **Customizable Responses:** Adapts output format (JSON or text) depending on the context of the query.  

---

## 🛠️ Technology Stack

**Backend**
- Python 3.11+ – Core language for AI agent logic and data processing  
- FastAPI – High-performance API framework to serve AI responses  
- PyTorch – For loading and running the Phi-3 Mini model with LoRA adapters  
- Transformers (Hugging Face) – Causal language modeling and tokenization  
- PEFT / LoRA – Efficient fine-tuning of large language models  
- WandB – Experiment tracking and model training monitoring  
- IPFS / Optional ICP integration – For decentralized storage of model outputs or logs  

**Frontend (Optional / Integration)**
- React 18 with TypeScript – For web dashboards integration  

- Tailwind CSS & Framer Motion – For styling and animations in UI components  

**Security & Deployment**
- Token-based authentication for API requests  
- GPU/CPU optimizations supported (`device_map="auto"`, `load_in_8bit=True`)  

---

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-agent

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export HF_TOKEN="your_huggingface_token"   # Linux/macOS
set HF_TOKEN=your_huggingface_token        # Windows

## 📁 Project Structure
ai-agent/
├── app.py                  # FastAPI main application; loads the fine-tuned Phi-3 Mini model from Hugging Face Hub
├── Model_training.py       # Script used to fine-tune Phi-3 Mini model with LoRA (training done locally)
├── train_dataset.jsonl     # Training dataset (JSONL format)
├── requirements.txt        # Python dependencies
├── README.md               # Project documentation

##💡 Notes

app.py serves user requests with AI-powered recommendations using the fine-tuned Phi-3 Mini model from Hugging Face.

Model_training.py is used for local fine-tuning with LoRA adapters.

train_dataset.jsonl contains few-shot conversation examples for training.

requirements.txt lists necessary Python packages: Transformers, PyTorch, FastAPI, Pydantic, etc.

##🔮 Future Roadmap

Integration with OriginTrace platform for real-time device certification queries

Improved few-shot examples for broader user queries

Optional ICP & IPFS integration for logging and decentralized storage

Web dashboard integration for interactive AI responses

