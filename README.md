# Florent Qevani — Portfolio

A personal portfolio and CV website built with React and Express.js, featuring live GitHub repository integration with caching.

![Node.js](https://img.shields.io/badge/Node.js-20-green)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)

## Features

- **Responsive Design** — Clean, accessible layout with custom CSS variables
- **Live GitHub Integration** — Fetches real repositories via the GitHub API with 5-minute caching
- **REST API** — Express backend serving structured CV data through dedicated endpoints
- **Docker Support** — Multi-stage Dockerfile for optimised production builds
- **SPA Routing** — Client-side navigation with server-side fallback

## Tech Stack

| Layer    | Technology                   |
| -------- | ---------------------------- |
| Frontend | React 18, React Router, Vite |
| Backend  | Express.js, Node.js 20       |
| Styling  | Custom CSS, Google Fonts     |
| DevOps   | Docker, Docker Compose       |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm

### Installation

```bash
git clone <repository-url>
cd cv-website
npm install
cd backend && npm install && cd ..
```

### Development

Run the frontend and backend concurrently:

```bash
npm run dev:full
```

Or start them separately:

```bash
# Backend — http://localhost:3001
npm run server

# Frontend — http://localhost:5174
npm run dev
```

The Vite dev server proxies `/api` requests to the backend automatically.

### Production Build

```bash
npm run build
npm run server
```

The Express server serves the built frontend from `dist/` and handles API requests on port **3001**.

### Docker

```bash
docker-compose up --build
```

The application will be available at `http://localhost:3001`.

## API Endpoints

| Method | Endpoint                 | Description          |
| ------ | ------------------------ | -------------------- |
| GET    | `/api/cv`                | Full CV data         |
| GET    | `/api/cv/experience`     | Work experience      |
| GET    | `/api/cv/education`      | Education history    |
| GET    | `/api/cv/skills`         | Technical skills     |
| GET    | `/api/cv/certifications` | Certifications       |
| GET    | `/api/cv/projects`       | Project highlights   |
| GET    | `/api/github/repos`      | GitHub repositories  |

## Project Structure

```
cv-website/
├── src/                  # React frontend
│   ├── components/       # UI components (Navbar, Hero, About, …)
│   ├── assets/           # Static assets
│   ├── App.jsx           # Root component — fetches CV data
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── backend/
│   ├── server.js         # Express server
│   ├── routes/api.js     # API route definitions
│   └── data/cv.js        # CV content
├── Dockerfile            # Multi-stage production build
├── docker-compose.yml    # Container orchestration
├── vite.config.js        # Vite configuration
└── package.json          # Frontend dependencies & scripts
```

## License

This project is for personal use. All rights reserved.
