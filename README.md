🚀 AI-Powered Portfolio Platform (Real-Time Analytics)

An AI-driven developer portfolio platform that combines an interactive AI playground with real-time user engagement analytics.

Built to demonstrate production-level system design, event-driven architecture, and real-time WebSocket communication.

🎯 Why This Project Exists

Traditional portfolios are static.
This project turns a portfolio into a living system:

Visitors interact with AI

Their actions are tracked in real time

Metrics update instantly across all connected clients

This mirrors how modern SaaS dashboards and analytics platforms are built in the real world.

✨ Core Features
🤖 AI Playground

Ask questions about skills, projects, and experience

Async AI request handling

Typing-effect response rendering

Context + answer pipeline visualization

📊 Real-Time Metrics Dashboard

Live AI query count

Live project click tracking

Live skill view tracking

Instant updates using WebSockets (no refresh)

🔌 Real-Time Architecture

Socket.IO over ASGI

Event-based metric updates

Broadcast synchronization to all clients

📈 Analytics-Ready Design

Structured for Plausible / Google Analytics

Section-level engagement tracking

Extendable to persistent storage (Redis / DB)

🧠 System Architecture
┌───────────────────────────┐
│        Frontend           │
│  Next.js + TypeScript     │
│  ─────────────────────   │
│  • AI Playground UI       │
│  • Realtime Dashboard     │
│  • Socket.IO Client       │
└─────────────┬─────────────┘
              │
     HTTP (AI requests)
     WebSocket (metrics)
              │
┌─────────────▼─────────────┐
│          Backend          │
│  FastAPI + Socket.IO      │
│  ─────────────────────   │
│  • AI Query Engine        │
│  • Metrics Event Engine   │
│  • Analytics Layer        │
└───────────────────────────┘


Architecture principles used:

Event-driven design

Stateless backend

Real-time broadcasting

Separation of concerns

🛠️ Tech Stack
Frontend

Next.js (App Router)

TypeScript (TSX)

Tailwind CSS

Socket.IO Client

Backend

FastAPI

Python Socket.IO (ASGI)

Async event handlers

CORS-safe WebSocket configuration

Analytics

Real-time in-memory metrics

Event-based tracking

Ready for Redis / database persistence

🔄 Real-Time Events
Event Name	Trigger Source	Purpose
ai_query	AI Playground submit	Increment AI usage
project_click	Project card click	Track engagement
skill_view	Skill interaction	Track interest
metrics:update	Backend broadcast	Sync all dashboards
⚙️ Local Development Setup

1️⃣ Clone the Repository
git clone https://github.com/yourusername/ai-powered-portfolio-platform
cd ai-powered-portfolio-platform

2️⃣ Start Frontend
cd apps/web
npm install
npm run dev


Runs at:

http://localhost:3000

3️⃣ Start Backend
cd apps/ai-backend
pip install -r requirements.txt
uvicorn app.main:app --reload


Runs at:

http://localhost:8000

🧪 Testing the Real-Time Metrics

Open dashboard in two browser tabs

Submit an AI question

Click projects or skills

Observe:

Instant metric updates

No page reload

All clients stay in sync

📸 Screenshots

docs/screenshots/
├── ai-playground.png
├── realtime-dashboard.png

📁 Project Structure
apps/
├── web/            # Next.js frontend
└── ai-backend/     # FastAPI backend

docs/
├── architecture.md
├── realtime-metrics.md
└── screenshots/


Organized as a scalable monorepo.

🔮 Future Enhancements

Redis-backed metric persistence

Historical analytics & charts

Authentication-based dashboards

Rate limiting for AI queries

Docker + production deployment

Admin analytics panel

🧑‍💻 Author

Ravi Shrivastava
MERN + AI Developer
📍 India

Focused on building real-world, scalable, system-driven applications.

⭐ What This Project Demonstrates

Real-time WebSocket systems

AI integration in frontend applications

Event-driven backend design

Production-ready architecture thinking

This is not a demo project — it is a system design showcase.
