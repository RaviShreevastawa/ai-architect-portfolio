from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class AILog(BaseModel):
    question: str
    answer: str
    model: str
    tokens_used: Optional[int] = 0
    latency_ms: int
    source: str = "portfolio"
    created_at: datetime = datetime.utcnow()
