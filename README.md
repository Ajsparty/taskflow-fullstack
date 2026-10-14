# TaskFlow

A full-stack task app I started for a web class. React frontend, Express backend, MongoDB.

Right now it's mostly a skeleton. Auth is stubbed, the UI is basic, and I haven't wired up real task CRUD yet. Spent way too long getting the monorepo structure and env files right.

## Stack
- Frontend: React + Vite + Tailwind
- Backend: Node/Express, JWT, Mongoose
- DB: MongoDB

## Running it
```bash
# backend
cd server && npm install
cp .env.example .env   # add your mongo uri
npm run dev

# frontend
cd client && npm install && npm run dev
```

Frontend on 5173, API on 5000.

## Notes
- JWT + bcrypt for auth (when I finish it)
- Priorities and due dates planned
- Still need proper error handling and the actual task routes

Built while taking classes at MSU. Might expand it later if I have time.