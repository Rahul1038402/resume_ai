# 🧠 Resume Analyzer AI

An intelligent resume analysis system that evaluates resumes against target job requirements using NLP and provides actionable feedback.

---

## 🚀 Features

- ✅ AI-powered resume scoring & skill extraction
- 📄 Supports PDF, DOCX, and plain text formats
- 🎯 Targeted job role templates (Data Scientist, Web Developer, etc.)
- 📊 Visual skill matching and score breakdown
- 💡 Actionable improvement recommendations

---

## 🛠️ Tech Stack

| Component       | Technology               |
|----------------|--------------------------|
| Frontend        | React 18 + TypeScript    |
| Styling         | Tailwind CSS + shadcn/ui |
| Backend         | Python Flask             |
| NLP Processing  | spaCy + en_core_web_lg   |
| Build Tool      | Vite                     |

---

## 📦 Prerequisites

- Node.js v18+
- Python 3.9+
- Git with Git LFS

---

## ⚙️ Installation

### 1. Clone Repository with Git LFS

```bash
git lfs install
git clone https://github.com/Rahul1038402/resume_ai.git
cd resume_ai
```

### 2. Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate      # On Linux/Mac
# .\.venv\Scripts\activate     # On Windows

# Install dependencies
pip install -r requirements.txt

# Download spaCy language model
python -m spacy download en_core_web_lg
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

## 🧪 Running Locally

### Start Backend (from `/backend`):

```bash
flask run --port 5000 --debug
```

### Start Frontend (from `/frontend`):

```bash
npm run dev
```

➡️ Open your browser and go to:  
http://localhost:3000 (or `8080` if configured)

---

## ⚙️ Configuration

Create `.env` files for both frontend and backend as follows:

### backend/.env

```ini
FLASK_ENV=development
FLASK_SECRET_KEY=your_secret_key_here
```

### frontend/.env

```ini
VITE_API_URL=http://localhost:5000
```

---

## 📁 Project Structure

```
resume_ai/
├── backend/
│   ├── app/
│   │   ├── __init__.py      # App initialization
│   │   ├── analyzer.py      # Core analysis logic
│   │   └── routes.py        # API routes
│   ├── requirements.txt     # Python dependencies
│   └── main.py              # Entry point
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── api/             # API service handlers
│   │   ├── components/      # React UI components
│   │   ├── types/           # TypeScript interfaces
│   │   └── main.tsx         # App entry
│   └── vite.config.ts       # Build config
│
└── README.md                # This file
```

---

## 🧰 Troubleshooting

| Error                          | Solution                                           |
|-------------------------------|----------------------------------------------------|
| ModuleNotFoundError           | Reinstall requirements: `pip install -r requirements.txt` |
| 413 Payload Too Large         | Make sure resume files are under 5MB               |
| CORS error                    | Ensure backend CORS allows frontend origin         |
| spaCy model missing           | Run: `python -m spacy download en_core_web_lg`     |
