# 📘 Smart Legal Document Analyzer (SLDA)

> **Automate contract review, clause classification, risk detection, and summarization using Java, AI, and React.**

---

## 📁 Project Structure

```bash
📁 SmartLegalDocumentAnalyzer/
├── backend/
│   ├── slda-api/                         # Spring Boot app
│   │   ├── src/main/java/com/slda/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── config/                  # JWT, CORS, etc.
│   │   ├── src/main/resources/
│   │   │   ├── application.properties
│   │   └── pom.xml
│   └── Dockerfile
│
├── ai-services/                         # Python AI layer
│   ├── clause_classifier/
│   ├── risk_detector/
│   ├── summarizer/
│   ├── similarity_checker/
│   ├── ocr_service/
│   └── shared_utils/                    # common preprocessing/tokenizers
│
├── frontend/                            # React app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── db/
│   ├── postgres-init.sql
│   └── mongo-init.js
│
├── docs/
│   ├── README.md
│   └── architecture.md
│
├── docker-compose.yml                   # Full dev stack
└── README.md
```

---

## 💼 Business Use Case

Legal teams often spend hours reading through legal documents such as NDAs, SLAs, and contracts. SLDA helps automate:

- 🔍 Risky clause detection
- 📑 Clause classification (e.g., Termination, Confidentiality)
- 🧠 Similarity comparison with previous contracts
- ✂️ Summarized versions for non-legal teams

> Saves time, reduces risk, and accelerates business decisions.

---

## 🧠 AI-Powered Features

| Feature               | AI/ML Technique                          | Tech Stack                       |
|----------------------|------------------------------------------|----------------------------------|
| Clause Classification| LegalBERT + Text Classification          | HuggingFace + FastAPI + Spring Boot |
| Risk Detection       | Fine-tuned BERT with rule-based logic    | Flask + Spring Boot              |
| Legal Summarizer     | LLM (GPT or LLaMA) + fine-tuning         | OpenAI API / HuggingFace         |
| Similarity Checker   | Sentence Embeddings + Cosine Similarity  | SentenceTransformers + Faiss     |
| OCR for PDFs         | Text extraction from scanned docs        | Tesseract + pytesseract + bridge |
| Dashboard & Upload   | UI for upload, monitoring & insights     | Spring Boot + React              |

---

## 🏗️ Architecture

- **Frontend**: React
- **Backend**: Spring Boot (Java)
- **AI Services**: Flask/FastAPI microservices (Python)
- **Databases**: PostgreSQL (structured data), MongoDB (AI metadata)
- **OCR**: Tesseract for scanned document support
- **Authentication**: JWT + Role-based access

---

## 📊 Advanced Features (Coming Soon)

- Chatbot for querying clauses: “What is the liability clause in NDA #2?”
- Fine-tuned LLMs for better legal summarization
- Audit trail with clause edits & approvals
- Exportable annotated PDFs
- Clause-level analytics dashboard

---

## 🧪 Getting Started (Local Dev)

### Prerequisites:
- Java 17+
- Python 3.9+
- Node.js 18+
- Docker & Docker Compose

### Commands:
```bash
# Start everything (Spring Boot, React, AI services)
docker-compose up --build
```

---

## 🤝 Contributing

Pull requests are welcome. Please create issues for major features.

---

## 📝 License

This project is licensed to be under the MIT License.
