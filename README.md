# 🧠 Resume Analyzer AI

An intelligent resume analysis system that evaluates resumes against target job requirements using NLP and provides actionable feedback.

---

## ✨ Features

* ✅ AI-powered resume scoring & skill extraction
* 📄 Supports PDF, DOCX, and plain text formats
* 🎯 Targeted job role templates (Data Scientist, Web Developer, etc.)
* 📊 Visual skill matching and score breakdown
* 💡 Actionable improvement recommendations

---

## 🛠️ Tech Stack

| Component      | Technology                |
| -------------- | ------------------------- |
| Frontend       | React 18 + TypeScript     |
| Styling        | Tailwind CSS + shadcn/ui  |
| Backend        | Python Flask              |
| NLP Processing | spaCy + en\_core\_web\_lg |
| Build Tool     | Vite                      |

---

## 📦 Prerequisites

* Node.js v18+
* Python 3.9+ (recommend using 3.11)
* Git with Git LFS

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

# Check your Python version (Use Python 3.11.9 for better setup)
python --version
# or if multiple versions installed:
# py -3.11 --version

# Create virtual environment
# On Windows:
py -3.11 -m venv .venv
.venv\Scripts\activate

# On Linux/macOS:
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt
```
### 3. Start Backend (from `/backend`):

```bash
flask run --port 5000 --debug
```
OR
```bash
python -m app.main
```
("Resume AI backend is running!" should be displayed on port 5000)


> 📦 Includes Flask, flask-cors, spaCy, python-docx, PyMuPDF, and en\_core\_web\_lg via direct URL.

If needed, install spaCy model manually:

```bash
python -m spacy download en_core_web_lg
```

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

### 5. Start Frontend (from `/frontend`):

```bash
npm run dev
```
(The website must be opened on port 8080 and the website is ready to be used)

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
🔺 backend/
│   🔺 app/
│   │   🔺 __init__.py      # App initialization
│   │   🔺 analyzer.py      # Core analysis logic
│   │   🔺 routes.py        # API routes
│   │   🔺 ...              # other files
│   🔺 requirements.txt     # Python dependencies
🔺 frontend/
│   🔺 public/              # Static assets
│   🔺 src/
│   │   🔺 api/             # API service handlers
│   │   🔺 components/      # React UI components
│   │   🔺 types/           # TypeScript interfaces
│   │   🔺 main.tsx         # App entry
│   🔺 vite.config.ts       # Build config
🔺 README.md                # This file
```

---

## 🛠️ Troubleshooting

| Error                        | Solution                                                  |
| ---------------------------- | --------------------------------------------------------- |
| ModuleNotFoundError          | Reinstall requirements: `pip install -r requirements.txt` |
| spaCy model missing          | Run: `python -m spacy download en_core_web_lg`            |
| fitz (PyMuPDF) not found     | Run: `pip install PyMuPDF`                                |
| docx not found               | Run: `pip install python-docx`                            |
| Python not found             | Reinstall Python and ensure it's added to PATH            |
| App Execution Alias conflict | Disable "python.exe" alias in App Execution Aliases       |

---

📅 All set! Start building your AI-powered resume analyzer!
