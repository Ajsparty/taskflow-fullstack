# TaskFlow • Full-Stack Task Management Application

**Intermediate College-Level Full-Stack Web Development Project**

## Overview

TaskFlow is a modern, production-inspired task and project management platform. It features a clean React frontend, a secure Node.js/Express REST API backend, and MongoDB for persistent storage. The application supports user registration/login (JWT-based authentication), task CRUD operations, priority levels, due dates, and basic collaboration features.

This project demonstrates intermediate-to-advanced web development skills including:
- Component-based frontend architecture
- State management and API integration
- Backend security best practices
- Database design and Mongoose ODM
- Responsive design with Tailwind CSS

**Timeline**: February – April 2025 | Michigan State University

## Tech Stack
**Frontend**
- React 18 + Vite
- Tailwind CSS 3.4
- React Router, React Hook Form, date-fns

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT) + bcrypt for auth
- CORS, Helmet, rate limiting

**DevOps**
- Git, GitHub Actions (CI)
- Environment variables (.env)

## Core Features
- User authentication (register, login, protected routes)
- Create, read, update, delete tasks
- Task prioritization (Low / Medium / High) with color coding
- Due date tracking with overdue highlighting
- Search and filter functionality
- Responsive mobile-first design
- Dark mode support

## Project Structure (Monorepo)
```
taskflow-fullstack/
├── client/                 # React + Vite frontend
│   ├── src/
│   ├── components/
│   └── App.jsx
├── server/                 # Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .env.example
└── README.md
```

## Getting Started (Development)

### 1. Backend
```bash
cd server
npm install
cp .env.example .env   # Add your MongoDB URI
npm run dev
```

### 2. Frontend
```bash
cd client
npm install
npm run dev
```

The frontend runs on http://localhost:5173 and proxies API calls to the backend.

## What This Project Demonstrates
- Secure authentication flow with refresh tokens
- RESTful API design following best practices
- Clean, maintainable React component structure
- Real-time feel through optimistic UI updates
- Professional UI/UX patterns (loading states, error handling, empty states)

## Future Improvements
- Real-time updates with Socket.io
- Task assignment to team members
- Kanban board drag-and-drop interface
- Email notifications for due tasks
- Docker containerization for easy deployment
- Full test suite (Jest + React Testing Library)

---

*Built by Aidan Swenson | Computational Data Science & Web Development @ Michigan State University*