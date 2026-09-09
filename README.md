<div align="center">

# AI Interview Preparation Platform

### _Your Smart Partner for Acing Every Interview_

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-AI-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)
[![Maintenance](https://img.shields.io/badge/Maintained-Yes-green.svg?style=flat-square)](https://github.com/)

</div>

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Software Design Principles](#software-design-principles)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The **AI Interview Preparation Platform** is a full-stack, AI-powered web application designed to help candidates prepare for technical and HR interviews with confidence. By leveraging state-of-the-art HuggingFace language models, the platform simulates real interview environments, provides personalized AI feedback, analyzes resumes, and tracks your learning progress — all in one place.

Whether you are preparing for a FAANG-level technical interview or a first-time HR round, this platform adapts to your level and helps you improve systematically.

> **Goal:** Democratize interview preparation by making AI-driven, personalized coaching accessible to everyone.

---

## Features

### AI-Generated Interview Questions
- Dynamically generates relevant interview questions based on topic, difficulty, and job role using HuggingFace models.
- Covers DSA, System Design, Behavioral, and HR categories.
- Questions adapt to candidate skill level and past performance.

### Real-Time Voice / Text Interview Simulation
- Simulates a real interview environment with timed questions.
- Supports both text-based and voice-based answer submission.
- Provides a realistic, pressure-tested practice experience.

### Resume Analysis and Tips
- Parses and analyzes uploaded resumes using AI.
- Identifies strengths, gaps, and keyword mismatches.
- Gives actionable suggestions to improve ATS compatibility and recruiter appeal.

### Topic-Wise Question Banks
- Curated question banks categorized by topic:
  - **DSA** (Arrays, Trees, Graphs, DP, etc.)
  - **System Design** (HLD, LLD, Scalability)
  - **HR and Behavioral** (STAR method, leadership, conflict resolution)
  - **Core CS** (OS, DBMS, Networks, OOP)

### Progress Tracking and Analytics Dashboard
- Visual dashboard showing your preparation journey.
- Track performance per topic, time spent, and accuracy trends.
- Personalized weak area identification and recommendations.

### Mock Interview Scheduling
- Schedule full-length mock interviews at a preferred time.
- Get reminded and receive a curated question set for the session.
- Post-interview AI debrief with detailed scoring and feedback.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 18, React Router, Context API | Interactive SPA, client-side routing, state |
| **Backend** | Node.js, Express.js | RESTful API server, business logic |
| **Database** | MongoDB, Mongoose ODM | NoSQL document storage, schema modeling |
| **AI / NLP** | HuggingFace Inference API | Question generation, answer evaluation, NLP |
| **Authentication** | JWT (JSON Web Tokens), bcryptjs | Secure token-based auth, password hashing |
| **File Handling** | Multer, PDF-Parse | Resume upload and parsing |
| **Styling** | CSS3, Custom Design System | Responsive UI, animations |
| **Dev Tools** | Nodemon, dotenv, ESLint, Prettier | Development workflow, env config, linting |

---

## Software Design Principles

This project has been architected by rigorously applying core **Software Design Principles** to ensure maintainability, scalability, and code quality.

### Observer Pattern *(Primary Design Pattern Applied)*

The **Observer Pattern** is the central behavioral design pattern used throughout this platform. It establishes a **one-to-many dependency** between objects so that when one object (the **Subject**) changes state, all its registered **Observers** are notified and updated automatically.

#### Where It Is Applied:

**1. Interview Session Event System**

```
InterviewSession (Subject)
    |
    +-- notifies --> ProgressTracker (Observer)      // updates user stats
    +-- notifies --> ScoreCalculator (Observer)      // computes session score
    +-- notifies --> FeedbackEngine (Observer)       // triggers AI feedback
    +-- notifies --> NotificationService (Observer)  // sends alerts/emails
```

When an interview session ends, all registered observers are automatically triggered — progress is saved, scores are computed, AI feedback is generated, and the user is notified.

**2. Real-Time Dashboard Updates**

```
UserProgressStore (Subject)
    |
    +-- notifies --> LineChartComponent (Observer)
    +-- notifies --> TopicRadarChart (Observer)
    +-- notifies --> WeakAreaHighlighter (Observer)
```

React Context API follows the Observer Pattern: when the central progress store updates, all subscribed dashboard widgets re-render reactively.

**3. AI Model Response Event Bus**

```
HuggingFaceService (Subject)
    |
    +-- notifies --> QuestionDisplay (Observer)
    +-- notifies --> LoadingStateManager (Observer)
    +-- notifies --> ErrorHandler (Observer)
```

The AI service emits events when a response arrives, is loading, or errors out — decoupling the AI layer from UI components.

#### Benefits Achieved:

| Benefit | Description |
|---|---|
| **Loose Coupling** | Subject does not know which observers exist; observers register themselves |
| **Open/Closed Principle** | Add new observers without modifying the subject |
| **Single Responsibility** | Each observer handles only its own concern |
| **Reusability** | Observers can be reused across different subjects |
| **Testability** | Each observer can be unit-tested independently |

#### Implementation Example (Node.js Backend):

```javascript
const EventEmitter = require('events');

// Subject
class InterviewSession extends EventEmitter {
  complete(result) {
    this.sessionData = result;
    this.emit('session:completed', result); // Notifies all observers
  }
}

// Observers register themselves
const session = new InterviewSession();
session.on('session:completed', (result) => progressTracker.update(result));
session.on('session:completed', (result) => scoreCalculator.compute(result));
session.on('session:completed', (result) => feedbackEngine.generate(result));
session.on('session:completed', (result) => notificationService.send(result));

// Trigger - all observers are notified automatically
session.complete({ userId: 'abc123', topic: 'DSA', answers: [...] });
```

#### Implementation Example (React Frontend - Context as Observer):

```javascript
// ProgressContext acts as the Subject
const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({});

  const updateProgress = (newData) => {
    setProgress(newData); // All subscribed observers (components) re-render
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Observer components subscribe via useContext
const LineChart = () => {
  const { progress } = useContext(ProgressContext); // Observes ProgressContext
  return <chart data={progress.weekly} />;
};
```

---

### Supporting Design Principles

| Principle | Applied As |
|---|---|
| **SRP** *(Single Responsibility)* | Each module handles one concern: `AuthController` only handles auth, `QuestionService` only handles questions |
| **DRY** *(Don't Repeat Yourself)* | Shared utilities (`validators.js`, `apiResponse.js`) prevent code duplication |
| **Separation of Concerns** | Routes → Controllers → Services → Models — clear layered responsibility |
| **Dependency Injection** | Services are injected into controllers rather than hard-coded instantiation |
| **KISS** *(Keep It Simple)* | Each function does one thing well; no over-engineering |

---

## System Architecture

```
+-----------------------------------------------------------------+
|                        CLIENT (React SPA)                       |
|  +----------+  +------------+  +--------------+  +----------+  |
|  |  Auth UI |  | Dashboard  |  |  Interview   |  |  Resume  |  |
|  |          |  | Analytics  |  |  Simulator   |  |  Analyzer|  |
|  +----------+  +------------+  +--------------+  +----------+  |
|       +------------------------------------------------+        |
|                     React Context API (Observer Pattern)         |
+-----------------------------------------------------------------+
                               | HTTPS REST API
                               v
+-----------------------------------------------------------------+
|                     SERVER (Node.js + Express)                  |
|                                                                  |
|  +----------+  +------------+  +--------------+  +-----------+  |
|  |  Routes  |->|Controllers |->|   Services   |->|  Models   |  |
|  |          |  |  (Logic)   |  | (Business)   |  | (Mongoose)|  |
|  +----------+  +------------+  +--------------+  +-----------+  |
|                                       |                 |        |
|                    +------------------+                 |        |
|                    v                                    v        |
|  +-------------------------+         +------------------------+  |
|  |  HuggingFace AI Service |         |   MongoDB Database     |  |
|  |  (Subject - EventEmitter|         |   (User, Question,     |  |
|  |   emits to Observers)   |         |    Session, Resume)    |  |
|  +-------------------------+         +------------------------+  |
+-----------------------------------------------------------------+
```

---

## Project Structure

```
AI-Interview-Preparation-Platform/
|
+-- client/                          # React Frontend
|   +-- public/
|   |   +-- index.html
|   +-- src/
|       +-- components/              # Reusable UI components
|       |   +-- common/              # Button, Modal, Loader, etc.
|       |   +-- interview/           # Interview simulation components
|       |   +-- dashboard/           # Analytics and progress widgets
|       |   +-- resume/              # Resume upload and display
|       +-- pages/                   # Route-level page components
|       |   +-- HomePage.jsx
|       |   +-- DashboardPage.jsx
|       |   +-- InterviewPage.jsx
|       |   +-- QuestionBankPage.jsx
|       |   +-- ResumeAnalysisPage.jsx
|       |   +-- SchedulePage.jsx
|       +-- context/                 # React Context (Observer - Client)
|       |   +-- AuthContext.jsx
|       |   +-- InterviewContext.jsx
|       |   +-- ProgressContext.jsx
|       +-- services/                # API service layer
|       |   +-- authService.js
|       |   +-- interviewService.js
|       |   +-- aiService.js
|       +-- utils/                   # Helper utilities
|       +-- styles/                  # Global CSS
|       +-- App.jsx
|
+-- server/                          # Node.js + Express Backend
|   +-- config/
|   |   +-- db.js                    # MongoDB connection
|   +-- controllers/                 # Request handlers (SRP applied)
|   |   +-- authController.js
|   |   +-- interviewController.js
|   |   +-- questionController.js
|   |   +-- resumeController.js
|   |   +-- progressController.js
|   +-- models/                      # Mongoose schemas
|   |   +-- User.js
|   |   +-- Question.js
|   |   +-- InterviewSession.js      # Subject in Observer Pattern
|   |   +-- Resume.js
|   +-- routes/                      # Express route definitions
|   |   +-- authRoutes.js
|   |   +-- interviewRoutes.js
|   |   +-- questionRoutes.js
|   |   +-- resumeRoutes.js
|   |   +-- progressRoutes.js
|   +-- services/                    # Business logic and AI services
|   |   +-- aiService.js             # HuggingFace integration (Subject)
|   |   +-- questionService.js
|   |   +-- resumeParser.js
|   +-- observers/                   # Observer Pattern implementations
|   |   +-- ProgressObserver.js      # Listens: updates user progress
|   |   +-- ScoreObserver.js         # Listens: computes session scores
|   |   +-- FeedbackObserver.js      # Listens: triggers AI feedback
|   |   +-- NotificationObserver.js  # Listens: sends notifications
|   +-- middleware/
|   |   +-- authMiddleware.js        # JWT verification
|   |   +-- errorHandler.js
|   |   +-- uploadMiddleware.js      # Multer file upload config
|   +-- utils/
|   |   +-- apiResponse.js           # Standardized API responses (DRY)
|   |   +-- validators.js
|   +-- .env.example
|   +-- server.js                    # Application entry point
|
+-- .gitignore
+-- README.md
+-- LICENSE
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** `>= 18.x` — [Download](https://nodejs.org/)
- **npm** `>= 9.x`
- **MongoDB** `>= 6.x` (local) or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- A **HuggingFace** account and API key — [Sign up](https://huggingface.co/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/AI-Interview-Preparation-Platform.git
cd AI-Interview-Preparation-Platform
```

**2. Install server dependencies**
```bash
cd server
npm install
```

**3. Install client dependencies**
```bash
cd ../client
npm install
```

### Environment Variables

**Server — create `server/.env`:**

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb://localhost:27017/ai-interview-platform

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# HuggingFace AI
HUGGINGFACE_API_KEY=hf_your_api_key_here
HUGGINGFACE_MODEL_ID=mistralai/Mistral-7B-Instruct-v0.1

# File Upload
MAX_FILE_SIZE=5mb
UPLOAD_DIR=uploads/
```

**Client — create `client/.env`:**

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### Running the Application

**Terminal 1 — Start the backend:**
```bash
cd server
npm run dev
# Server runs at http://localhost:5000
```

**Terminal 2 — Start the frontend:**
```bash
cd client
npm start
# App opens at http://localhost:3000
```

---

## API Documentation

### Base URL: `http://localhost:5000/api`

#### Authentication

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/auth/register` | Register a new user | No |
| POST | `/auth/login` | Login and get JWT token | No |
| GET | `/auth/profile` | Get current user profile | Yes |
| PUT | `/auth/profile` | Update user profile | Yes |

#### Interview Sessions

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/interview/start` | Start a new interview session | Yes |
| POST | `/interview/:id/submit` | Submit answer (triggers Observer chain) | Yes |
| GET | `/interview/:id` | Get session details and feedback | Yes |
| GET | `/interview/history` | Get all past sessions | Yes |
| POST | `/interview/schedule` | Schedule a mock interview | Yes |

#### Question Bank

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/questions` | Get all questions (filterable) | Yes |
| GET | `/questions/:id` | Get a specific question | Yes |
| GET | `/questions/topics` | List all available topics | Yes |
| POST | `/questions/generate` | AI-generate custom questions | Yes |

#### Resume Analysis

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/resume/upload` | Upload and analyze resume (PDF) | Yes |
| GET | `/resume/analysis` | Get latest resume analysis | Yes |
| GET | `/resume/history` | Get all resume analyses | Yes |

#### Progress and Analytics

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/progress/dashboard` | Get full analytics dashboard data | Yes |
| GET | `/progress/topics` | Performance breakdown by topic | Yes |
| GET | `/progress/streak` | Get study streak information | Yes |

---

## Contributing

Contributions are welcome. To get started:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "feat: add voice recognition for interview simulation"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Star this repository if it helped you.**

Made with dedication to help every developer ace their dream interview.

</div>