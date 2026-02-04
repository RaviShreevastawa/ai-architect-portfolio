from app.db.mongo import db

print("Collections:", db.list_collection_names())
