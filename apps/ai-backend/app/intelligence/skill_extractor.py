from app.db.mongo import db
from collections import Counter

def extract_skills():
    repos = list(db.github_profile.find())

    languages = []
    topics = []

    for repo in repos:
        if repo.get("language"):
            languages.append(repo["language"])
        topics.extend(repo.get("topics", []))

    language_score = Counter(languages)
    topic_score = Counter(topics)

    return {
        "languages": language_score.most_common(5),
        "topics": topic_score.most_common(10),
        "total_repos": len(repos)
    }
