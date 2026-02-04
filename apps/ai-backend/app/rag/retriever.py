# app/rag/retriever.py
from .embedder import embed_text
from .vector_store import search

def retrieve_context(query: str):
    query_embedding = embed_text(query)
    return search(query_embedding)
