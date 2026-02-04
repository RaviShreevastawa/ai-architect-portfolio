from app.db.mongo import db

def build_github_context(limit: int = 5):
    repos = (
        db.github_profile
        .find({})
        .sort("stars", -1)
        .limit(limit)
    )

    context = []

    for repo in repos:
        line = (
            f"Repository '{repo['name']}' "
            f"written mainly in {repo['language']}. "
            f"Stars: {repo['stars']}, Forks: {repo['forks']}. "
            f"Description: {repo.get('description') or 'No description'}."
        )
        context.append(line)

    return context
