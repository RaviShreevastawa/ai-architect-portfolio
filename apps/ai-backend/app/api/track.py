from fastapi import APIRouter
from app.realtime.socket import emit_metric

router = APIRouter()

@router.post("/track/{event}")
async def track_event(event: str):
    await emit_metric(event)
    return {"status": "tracked"}
