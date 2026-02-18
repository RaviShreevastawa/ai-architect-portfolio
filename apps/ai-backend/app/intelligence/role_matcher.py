from app.intelligence.skill_extractor import extract_skills

ROLE_RULES = {
    "Backend Developer": {
        "keywords": ["node", "express", "mongodb", "api", "backend"],
        "languages": ["Python", "JavaScript"]
    },
    "Full Stack Developer": {
        "keywords": ["react", "frontend", "mern", "fullstack"],
        "languages": ["JavaScript", "TypeScript"]
    },
    "AI / ML Engineer": {
        "keywords": ["ai", "ml", "llm", "nlp", "deep-learning"],
        "languages": ["Python"]
    },
}

def match_roles():
    skills = extract_skills()

    topics = [t[0].lower() for t in skills["topics"]]
    languages = [l[0] for l in skills["languages"]]

    role_scores = {}

    for role, rules in ROLE_RULES.items():
        score = 0

        score += sum(1 for kw in rules["keywords"] if kw in topics)
        score += sum(1 for lang in rules["languages"] if lang in languages)

        role_scores[role] = score

    ranked_roles = sorted(role_scores.items(), key=lambda x: x[1], reverse=True)

    return ranked_roles
