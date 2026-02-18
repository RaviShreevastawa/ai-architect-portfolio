from app.intelligence.role_matcher import match_roles

if __name__ == "__main__":
    roles = match_roles()
    print("\n🎯 Role Match Results:\n")
    for role, score in roles:
        print(f"{role}: {score}")
