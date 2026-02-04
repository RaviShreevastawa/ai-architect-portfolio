from fastapi import FastAPI
from app.api.ask import router as ask_router
from app.rag.loader import load_portfolio
from app.api.metrics import router as metrics_router
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
load_dotenv()


app = FastAPI(
    title="Ravi AI Portfolio Backend",
    description="RAG-powered AI engine for portfolio",
    version="1.0.0"
)

# 🔥 Load vector store on startup
@app.on_event("startup")
def startup_event():
    load_portfolio()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],  # THIS FIXES OPTIONS
    allow_headers=["*"],
)

# 🔗 Routes
app.include_router(ask_router)
app.include_router(metrics_router)


# 🧪 Health check
@app.get("/")
def root():
    return {"status": "AI backend running"}
