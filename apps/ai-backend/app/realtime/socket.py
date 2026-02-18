import socketio

sio = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins="http://localhost:3000"
)

socket_app = socketio.ASGIApp(sio)

# In-memory metrics (OK for now)
metrics = {
    "ai_queries": 0,
    "project_clicks": 0,
    "skill_views": 0,
}

@sio.event
async def connect(sid, environ):
    print("🔌 Client connected:", sid)
    await sio.emit("metrics:update", metrics, to=sid)

@sio.event
async def disconnect(sid):
    print("❌ Client disconnected:", sid)

# 🔥 THESE EVENTS WERE MISSING 🔥

@sio.event
async def ai_query(sid):
    metrics["ai_queries"] += 1
    await sio.emit("metrics:update", metrics)

@sio.event
async def project_click(sid):
    metrics["project_clicks"] += 1
    await sio.emit("metrics:update", metrics)

@sio.event
async def skill_view(sid):
    metrics["skill_views"] += 1
    await sio.emit("metrics:update", metrics)
