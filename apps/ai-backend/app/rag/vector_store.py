# app/rag/vector_store.py
import faiss
import numpy as np

index = faiss.IndexFlatL2(384)
documents = []

def add_to_index(embeddings, docs):
    index.add(np.array(embeddings))
    documents.extend(docs)

def search(query_embedding, k=3):
    distances, indices = index.search(
        np.array([query_embedding]), k
    )
    return [documents[i] for i in indices[0]]
