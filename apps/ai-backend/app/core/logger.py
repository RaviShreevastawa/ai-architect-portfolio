from datetime import datetime
from app.db.mongo import ai_logs

def log_request(question: str, answer: str, status: str = "success"):
    ai_logs.insert_one({
        "question": question,
        "answer": answer,
        "status": status,
        "created_at": datetime.utcnow()
    })
