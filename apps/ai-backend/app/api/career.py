from fastapi import APIRouter
from app.intelligence.skill_extractor import extract_skills
from app.intelligence.role_matcher import match_roles

router = APIRouter()


@router.get("/career")
def career_report():
    skills = extract_skills()
    raw_roles = match_roles()

    roles = []

    for r in raw_roles:
        # Handle both (role, score) and (role, score, matched_skills)
        if len(r) == 2:
            role_name, score = r
            matched_skills = []
        else:
            role_name, score, matched_skills = r

        roles.append({
            "role": role_name,
            "score": score,
            "matched_skills": matched_skills
        })

    top_roles = roles[:3]

    recommendations = []
    for r in top_roles:
        if r["matched_skills"]:
            recommendations.append(
                f"You are a strong match for {r['role']} based on your experience with "
                f"{', '.join(r['matched_skills'])}."
            )
        else:
            recommendations.append(
                f"You are a strong match for {r['role']} based on your overall GitHub activity."
            )

    return {
        "summary": "AI-generated career analysis based on your GitHub activity.",
        "skills": skills,
        "top_roles": top_roles,
        "recommendations": recommendations
    }
