# 💸 Spend-Track

A simple personal finance tracker with a FastAPI backend and React (Vite) frontend.

---

## 📁 Project Structure

spend-track/ ├── backend/ # FastAPI backend │ ├── main.py │ ├── models.py │ ├── database.py │ ├── finance.db │ └── requirements.txt ├── frontend/ # React frontend (Vite) │ ├── finance-app/ │ │ ├── src/ │ │ ├── public/ │ │ ├── index.html │ │ ├── package.json │ │ └── ...

yaml
Copy
Edit

---

## 🚀 Getting Started

Follow these steps to run both the backend and frontend locally on your machine.

---

## ⚙️ 1. Clone the Repository

```bash
git clone https://github.com/yourusername/spend-track.git
cd spend-track
🖥️ 2. Backend Setup (FastAPI)
Navigate to the backend folder:
bash
Copy
Edit
cd backend
Create a virtual environment:
On macOS/Linux:
bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate
On Windows:
bash
Copy
Edit
python -m venv venv
venv\Scripts\activate
Install dependencies:
bash
Copy
Edit
pip install -r requirements.txt
Run the FastAPI server:
bash
Copy
Edit
uvicorn main:app --reload
The API will be live at: http://127.0.0.1:8000

Access interactive docs at: http://127.0.0.1:8000/docs

🌐 3. Frontend Setup (React + Vite)
Navigate to the frontend directory:
bash
Copy
Edit
cd ../frontend/finance-app
Install Node dependencies:
bash
Copy
Edit
npm install
Start the development server:
bash
Copy
Edit
npm run dev
The frontend will be running at: http://localhost:5173

🔗 Connecting Frontend & Backend
Make sure the frontend is making requests to the correct backend URL (e.g., http://127.0.0.1:8000), especially if you're using fetch/axios. You might want to configure a proxy in vite.config.js for local development.

Example proxy:

js
Copy
Edit
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    }
  }
}
🧪 API Docs
FastAPI provides interactive documentation:

Swagger UI: http://127.0.0.1:8000/docs

ReDoc: http://127.0.0.1:8000/redoc

📌 Notes
The database file finance.db is already included for local testing. You can delete it if you want a fresh start.

If you use environment variables for secrets or config, consider creating a .env.example file.

Make sure to add CORS middleware in main.py if frontend and backend are on different ports:

python
Copy
Edit
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"] for stricter control
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
🤝 Contributing
Feel free to fork the repo, submit pull requests, or file issues!

📜 License
MIT License. Do what you want, just don’t forget to give credit!

✨ Author
Made with ❤️ Saksham
