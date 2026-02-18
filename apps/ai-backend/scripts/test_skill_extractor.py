from app.intelligence.skill_extractor import extract_skills

if __name__ == "__main__":
    data = extract_skills()

    print("\n🧠 Extracted Skills Summary\n")

    print("📦 Total Repositories:", data["total_repos"])

    print("\n🧪 Languages:")
    for lang, count in data["languages"]:
        print(f"  - {lang}: {count}")

    print("\n🏷 Topics:")
    if data["topics"]:
        for topic, count in data["topics"]:
            print(f"  - {topic}: {count}")
    else:
        print("  (No topics found)")
