from fastapi import APIRouter
from app.db.mongo import ai_logs
from datetime import datetime, timedelta

router = APIRouter()

@router.get("/metrics")
def get_metrics():
    total_requests = ai_logs.count_documents({})

    today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)

    today_requests = ai_logs.count_documents({
        "created_at": {"$gte": today}
    })

    return {
        "total_requests": total_requests,
        "requests_today": today_requests
    }
