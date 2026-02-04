from fastapi import APIRouter
from app.rag.retriever import retrieve_context
from app.rag.prompt import build_prompt
from app.core.llm import generate_answer
from app.core.logger import log_request
from app.rag.github_context import build_github_context

router = APIRouter()

@router.post("/ask")
def ask(payload: dict):
    question = payload["question"]

    try:
        # 1️⃣ Retrieve vector / document context
        context = retrieve_context(question) or []

        # 2️⃣ Retrieve GitHub intelligence
        github_context = build_github_context() or []

        # 3️⃣ Combine all context
        combined_context = context + github_context

        # 4️⃣ Build prompt ONCE
        prompt = build_prompt(combined_context, question)

        # 5️⃣ Generate answer
        answer = generate_answer(prompt)

        # 6️⃣ Log success
        log_request(question, answer, status="success")

        return {
            "question": question,
            "answer": answer,
            "sources": combined_context
        }

    except Exception as e:
        log_request(question, str(e), status="error")

        return {
            "question": question,
            "answer": "⚠️ AI is currently unavailable. Please try again later.",
            "sources": []
        }
