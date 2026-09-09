# Requirements Report
## AI Interview Preparation Platform

**Document Type:** Requirements Report  
**Version:** 1.0  
**Date:** September 2026  
**Status:** Approved

---

## 1. Project Overview

The **AI Interview Preparation Platform** is a full-stack, AI-powered web application designed to help candidates systematically prepare for technical and HR interviews. It leverages HuggingFace language models to simulate real interview environments, provide personalized feedback, analyze resumes, and track user progress.

---

## 2. Stakeholders

| Stakeholder | Role | Interest |
|---|---|---|
| Job Seekers / Students | Primary Users | Prepare for technical and HR interviews |
| Recruiters / HR Teams | Secondary Users | Evaluate platform-prepared candidates |
| Platform Administrators | Admin | Manage content, users, and AI models |
| Development Team | Builders | Design, build, and maintain the platform |

---

## 3. Business Requirements

| ID | Requirement |
|---|---|
| BR-01 | The platform must provide AI-driven, personalized interview preparation |
| BR-02 | The system must support multiple interview categories (DSA, System Design, HR, Core CS) |
| BR-03 | The platform must be accessible via modern web browsers without installation |
| BR-04 | Users must be able to track their progress over time |
| BR-05 | The system must integrate with HuggingFace AI models for question generation and evaluation |

---

## 4. Functional Requirements

### 4.1 User Authentication

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Users shall register with email and password | High |
| FR-02 | Users shall log in and receive a JWT token for session management | High |
| FR-03 | Users shall update their profile information | Medium |
| FR-04 | Passwords shall be hashed using bcryptjs before storage | High |

### 4.2 AI-Generated Interview Questions

| ID | Requirement | Priority |
|---|---|---|
| FR-05 | The system shall generate questions based on topic, difficulty, and job role | High |
| FR-06 | Questions shall cover DSA, System Design, Behavioral, and HR categories | High |
| FR-07 | The AI model shall evaluate user answers and provide feedback | High |
| FR-08 | Questions shall adapt to the candidate's skill level and past performance | Medium |

### 4.3 Interview Simulation

| ID | Requirement | Priority |
|---|---|---|
| FR-09 | The system shall simulate a real interview with timed questions | High |
| FR-10 | Users shall submit answers via text input | High |
| FR-11 | Users shall be able to submit answers via voice recording | Medium |
| FR-12 | The system shall provide a post-session AI debrief with scoring | High |

### 4.4 Resume Analysis

| ID | Requirement | Priority |
|---|---|---|
| FR-13 | Users shall upload resumes in PDF format | High |
| FR-14 | The AI shall parse and analyze the resume content | High |
| FR-15 | The system shall identify strengths, gaps, and ATS keyword mismatches | High |
| FR-16 | Users shall receive actionable improvement suggestions | Medium |

### 4.5 Question Bank

| ID | Requirement | Priority |
|---|---|---|
| FR-17 | The platform shall maintain a curated, filterable question bank | High |
| FR-18 | Questions shall be filterable by topic, difficulty, and category | High |
| FR-19 | Users shall practice individual questions outside of interview mode | Medium |

### 4.6 Progress Tracking and Analytics

| ID | Requirement | Priority |
|---|---|---|
| FR-20 | The system shall display a dashboard with progress metrics | High |
| FR-21 | Analytics shall include performance per topic, time spent, and accuracy | High |
| FR-22 | The system shall identify and highlight weak areas | Medium |
| FR-23 | Users shall see study streak information | Low |

### 4.7 Mock Interview Scheduling

| ID | Requirement | Priority |
|---|---|---|
| FR-24 | Users shall schedule full-length mock interviews for a future time | Medium |
| FR-25 | The system shall notify users before a scheduled session | Low |

---

## 5. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-01 | Performance | API responses shall complete within 2 seconds for standard requests |
| NFR-02 | Performance | AI model responses shall complete within 10 seconds |
| NFR-03 | Scalability | The backend shall support horizontal scaling via stateless JWT auth |
| NFR-04 | Security | All API endpoints (except auth) shall require JWT verification |
| NFR-05 | Security | User passwords shall never be stored in plaintext |
| NFR-06 | Security | File uploads shall be restricted to PDF, max 5MB |
| NFR-07 | Availability | The platform shall target 99.5% uptime |
| NFR-08 | Usability | The UI shall be fully responsive across desktop and mobile |
| NFR-09 | Maintainability | Code shall follow SRP with Routes → Controllers → Services → Models layering |
| NFR-10 | Compatibility | The frontend shall support the last 2 major versions of Chrome, Firefox, and Edge |

---

## 6. System Constraints

- The AI functionality is dependent on HuggingFace Inference API availability.
- MongoDB is required as the database; relational databases are not supported.
- Voice-based answer input requires browser microphone permissions.
- Resume analysis is limited to PDF file format.

---

## 7. Assumptions

- Users have a stable internet connection.
- Users have a valid HuggingFace API key configured in the environment.
- The platform is deployed in a Node.js 18+ runtime environment.
- MongoDB instance (local or Atlas) is available and accessible.

---

## 8. Dependencies

| Dependency | Version | Purpose |
|---|---|---|
| React | 18.x | Frontend SPA framework |
| Node.js | 20.x | Backend runtime |
| Express.js | 4.x | RESTful API server |
| MongoDB / Mongoose | 7.x | Database and ODM |
| HuggingFace Inference API | Latest | AI question generation and evaluation |
| JWT / bcryptjs | Latest | Auth and security |
| Multer / PDF-Parse | Latest | Resume upload and parsing |

---

*End of Requirements Report*
