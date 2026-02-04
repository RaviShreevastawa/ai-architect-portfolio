import os
import requests
from datetime import datetime
from app.db.mongo import db
from dotenv import load_dotenv

load_dotenv()

GITHUB_USERNAME = os.getenv("GITHUB_USERNAME")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

HEADERS = {
    "Accept": "application/vnd.github+json",
}

if GITHUB_TOKEN:
    HEADERS["Authorization"] = f"Bearer {GITHUB_TOKEN}"


def fetch_repos():
    url = f"https://api.github.com/users/{GITHUB_USERNAME}/repos?per_page=100"
    res = requests.get(url, headers=HEADERS)
    print("GitHub user:", GITHUB_USERNAME)
    res.raise_for_status()
    return res.json()


def normalize_repo(repo):
    return {
        "name": repo["name"],
        "description": repo["description"],
        "language": repo["language"],
        "topics": repo.get("topics", []),
        "stars": repo["stargazers_count"],
        "forks": repo["forks_count"],
        "url": repo["html_url"],
        "updated_at": repo["updated_at"],
        "ingested_at": datetime.utcnow(),
    }


def ingest_github():
    repos = fetch_repos()
    normalized = [normalize_repo(r) for r in repos]

    db.github_profile.delete_many({})
    db.github_profile.insert_many(normalized)

    print(f"✅ Ingested {len(normalized)} GitHub repositories")
