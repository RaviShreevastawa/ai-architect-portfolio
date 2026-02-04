# app/rag/loader.py
from .embedder import embed_text
from .vector_store import add_to_index

def load_portfolio():
    with open("data/portfolio.txt", "r") as f:
        text = f.read()

    chunks = text.split("\n")
    embeddings = [embed_text(c) for c in chunks]

    add_to_index(embeddings, chunks)
