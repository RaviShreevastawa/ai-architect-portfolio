def build_prompt(context, question):
    joined_context = "\n".join(context)

    return f"""
You are an AI assistant answering questions about Ravi.

Use ONLY the information below.
If the answer is not present, say you don't know.

Context:
{joined_context}

Question:
{question}

Answer clearly, confidently, and professionally:
"""
