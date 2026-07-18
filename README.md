# 🚀 AI Resume Builder

An AI-powered Full Stack Resume Builder that allows users to create professional resumes using customizable templates, AI-generated professional summaries, live preview, and PDF download.

Built using **React.js**, **Spring Boot**, **MySQL**, and **Google Gemini AI**.

---

# 📌 Features

## Resume Management
- Create unlimited resumes
- Update existing resumes
- Delete resumes
- View all resumes
- Auto-save resume information

## Resume Sections
- Personal Information
- Professional Summary
- Education
- Work Experience
- Projects
- Skills
- Certifications
- Languages
- Achievements

## AI Features
- AI-generated Professional Summary
- AI content enhancement using Google Gemini API
- Smart suggestions for resume improvement

## Resume Templates
- Modern
- ATS Friendly
- Professional
- Creative
- Minimal

## PDF Export
- Download resume as PDF
- Print-ready formatting
- Responsive layout

## Live Preview
- Real-time resume preview
- Instant updates while editing

## Backend Features
- REST APIs
- CRUD Operations
- JWT Authentication
- Role-Based Authorization
- Secure Password Encryption
- MySQL Database Integration
- Swagger API Documentation

---

# 🛠 Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- React Router
- Axios
- CSS3
- HTML5

---

## Backend

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT Authentication
- Maven

---

## Database

- MySQL

---

## AI

- Google Gemini API

---

# 📂 Project Structure

```
FullstackJava
│
├── frontend
│   ├── src
│   │   ├── Components
│   │   ├── Pages
│   │   ├── Context
│   │   ├── Services
│   │   ├── Templates
│   │   ├── Assets
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── main
│   │   │
│   │   ├── controller
│   │   ├── service
│   │   ├── repository
│   │   ├── entity
│   │   ├── dto
│   │   ├── security
│   │   ├── config
│   │   ├── exception
│   │   └── resources
│   │
│   └── pom.xml
│
└── README.md
```

---

# 🗄 Database Schema

Main Entities

- User
- Resume
- Education
- Experience
- Project
- Skill
- Certification
- Language
- Achievement

Relationships

```
User
   |
   | 1
   |
   |------< Resume
                 |
                 |------< Education
                 |------< Experience
                 |------< Project
                 |------< Skill
                 |------< Certification
                 |------< Language
                 |------< Achievement
```

---

# 🔐 Authentication

The application uses

- JWT Authentication
- BCrypt Password Encryption
- Spring Security
- Role-Based Authorization

Roles

- USER
- ADMIN

---

# ⚙ Backend Setup

## Clone Repository

```bash
git clone https://github.com/GouniRani29/FullstackJava.git
```

---

## Backend

```bash
cd backend
```

Install dependencies

```bash
mvn clean install
```

Run

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

# 💻 Frontend Setup

```bash
cd frontend
```

Install

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 🛢 MySQL Configuration

Create database

```sql
CREATE DATABASE airesume;
```

Configure

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/airesume
spring.datasource.username=your_username
spring.datasource.password=your_password
```

---

# 🤖 Gemini API Configuration

Create an environment variable:

```
GEMINI_API_KEY=your_api_key
```

In `application.properties`:

```properties
gemini.api.key=${GEMINI_API_KEY}
```

**Do not store API keys directly in the repository.**

---

# 📖 API Documentation

Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

---

# 📸 Screenshots

Add screenshots of:

- Home Page
- Resume Builder
- AI Summary Generator
- Resume Templates
- Live Preview
- PDF Download
- Login Page
- Dashboard

---

# 📌 Future Enhancements

- Multiple Resume Themes
- Drag & Drop Sections
- Resume Sharing
- Resume Analytics
- AI Resume Scoring
- Cover Letter Generator
- LinkedIn Resume Import
- Dark Mode
- Cloud Storage
- Resume Version History

---

# 🎯 Learning Outcomes

- Full Stack Development
- Spring Boot REST APIs
- React Component Architecture
- JWT Authentication
- MySQL Database Design
- AI Integration with Google Gemini
- PDF Generation
- Responsive UI Design
- Git & GitHub Workflow

---

# 👩‍💻 Author

**Rani Gouni**

B.Tech (Data Science)

GitHub

https://github.com/GouniRani29

---

# 📄 License

This project is developed for educational and portfolio purposes.

---
