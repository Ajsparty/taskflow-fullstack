# TaskFlow

Full-stack task management application built with React, Node.js/Express, and MongoDB.

Includes user authentication (JWT), task CRUD operations, priority handling, and a responsive UI.

## Tech Stack
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js / Express, JWT, Mongoose
- Database: MongoDB

## Running Locally
```bash
# Backend
cd server && npm install
cp .env.example .env  # configure MongoDB URI
npm run dev

# Frontend
cd client && npm install && npm run dev
```

Frontend available at http://localhost:5173, API at http://localhost:5000.

## Features
- JWT-based authentication with bcrypt
- Task priorities and due dates
- Error handling and validation

A production-ready starting point for task tracking systems.