<div align="center">
 
# AI Interview Preparation Platform

### _Your Smart Partner for Acing Every Interview_

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-AI-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

</div>

---

A full-stack, AI-powered web application that helps candidates prepare for technical and HR interviews. It leverages HuggingFace LLMs to generate questions, simulate interviews, analyze resumes, and track progress.

---

## Documentation

| Document | Description |
|---|---|
| [Requirements Report](docs/requirements-report.md) | Business, functional, and non-functional requirements |
| [SRS Document](docs/SRS.md) | IEEE 830-compliant Software Requirements Specification |
| [UML Use Case Diagram](docs/use-case-diagram.md) | System actors, use cases, and event flows |

---

## Features

- **AI Question Generation** — Dynamic questions by topic, difficulty, and role via HuggingFace LLMs
- **Interview Simulation** — Timed sessions with text and voice answer support
- **AI Feedback & Scoring** — Automated evaluation with post-session debrief
- **Resume Analysis** — PDF parsing with ATS keyword and gap analysis
- **Question Bank** — Searchable library across DSA, System Design, HR, and Core CS
- **Progress Dashboard** — Analytics, topic breakdown, weak area highlights, and streaks
- **Mock Interview Scheduling** — Calendar-based session scheduling

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router, Context API |
| Backend | Node.js 20, Express.js |
| Database | MongoDB 7, Mongoose ODM |
| AI / NLP | HuggingFace Inference API |
| Auth | JWT, bcryptjs |
| File Handling | Multer, pdf-parse |

---

## Architecture

```
[React SPA]  <--HTTPS-->  [Express API]  <-->  [MongoDB]
                                  |
                       [HuggingFace AI API]
```

**Design Pattern:** Observer Pattern — on session completion, a chain of observers (Progress, Score, Feedback, Notification) is automatically triggered.

**Layered Architecture:** `Routes → Controllers → Services → Models`

---

## Project Structure

```
AI-Interview-Preparation-Platform/
├── client/                     # React Frontend
│   └── src/
│       ├── components/         # Reusable UI components
│       ├── pages/              # Route-level pages
│       ├── context/            # React Context (Auth, Interview, Progress)
│       ├── services/           # API service layer
│       └── App.jsx
├── server/                     # Node.js + Express Backend
│   ├── controllers/            # Request handlers
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # Express routes
│   ├── services/               # Business logic & AI integration
│   ├── observers/              # Observer pattern implementations
│   ├── middleware/             # Auth, error handling, file upload
│   └── server.js
├── docs/                       # Project documentation
│   ├── requirements-report.md
│   ├── SRS.md
│   └── use-case-diagram.md
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js >= 18.x
- MongoDB >= 6.x (local or [Atlas](https://www.mongodb.com/atlas))
- HuggingFace API key — [Sign up](https://huggingface.co/)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/AI-Interview-Preparation-Platform.git

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Environment Variables

**`server/.env`**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-interview-platform
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
HUGGINGFACE_API_KEY=hf_your_api_key
HUGGINGFACE_MODEL_ID=mistralai/Mistral-7B-Instruct-v0.1
MAX_FILE_SIZE=5mb
UPLOAD_DIR=uploads/
```

**`client/.env`**
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### Run Locally

```bash
# Terminal 1 — Backend
cd server && npm run dev     # http://localhost:5000

# Terminal 2 — Frontend
cd client && npm start       # http://localhost:3000
```

---

## API Overview

| Group | Base Path | Auth Required |
|---|---|---|
| Authentication | `/api/auth` | No (register/login) |
| Interview Sessions | `/api/interview` | Yes |
| Question Bank | `/api/questions` | Yes |
| Resume Analysis | `/api/resume` | Yes |
| Progress Analytics | `/api/progress` | Yes |

---

## License

MIT — see [LICENSE](LICENSE) for details.
