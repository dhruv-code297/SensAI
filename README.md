# 🚀 SensAI – AI Career Coach

SensAI is an **AI-powered Career Coaching platform** built using **Next.js, Prisma, NeonDB, and Google Gemini AI**.
It helps users **analyze industries, build resumes, generate cover letters, and prepare for interviews using AI.**

The platform provides **personalized career insights** based on the user’s chosen industry and experience level.

---

# 🌟 Features

## 🔐 Authentication

* Secure login and signup using **Clerk**
* Protected routes
* User profile management

---

## 🏠 Landing Page

* Modern responsive UI
* Feature overview
* Call-to-action for onboarding

---

## 🧭 User Onboarding

Users select:

* Industry
* Sub-industry
* Career preferences

Based on this information, **AI generates personalized industry insights.**

---

## 📊 AI Industry Insights

Using **Google Gemini AI**, SensAI generates:

* Industry analysis
* Trending job roles
* Key skills required
* Career growth insights

### 📈 Data Visualization

Insights are visualized using **Recharts**:

* Job trend graphs
* Skill demand charts
* Industry growth analytics

### ⏱ Automated Updates

* Industry insights update **every 7 days**
* Managed using **Inngest cron jobs**

---

## 📄 AI Resume Builder

A fully functional **AI-powered resume builder**.

### Features

* Markdown resume editor
* Add:

  * Name
  * Email
  * Experience
  * Skills
  * Education
  * Projects
* **AI Improve Button** to enhance resume content
* Export resume as **PDF**

Libraries used:

* `react-markdown`
* `html2pdf.js`

---

## ✉️ AI Cover Letter Generator

Generate professional cover letters instantly using **Gemini AI**.

Users provide:

* Job role
* Company name
* Experience

AI generates a **personalized cover letter** ready to send.

---

## 🎤 AI Interview Preparation

Helps users prepare for interviews by generating:

* 10 interview questions
* Detailed explanations
* Tips for improvement

### 📊 Performance Tracking

Tracks interview preparation performance using graphs.

Users can analyze:

* Strength areas
* Weak areas
* Progress over time

---

# 🧱 Tech Stack

### Frontend

* Next.js 16
* React 19
* TailwindCSS
* Radix UI
* Recharts

### Backend

* Next.js Server Actions
* Prisma ORM
* NeonDB (PostgreSQL)

### AI Integration

* Google Gemini AI

### Authentication

* Clerk

### Background Jobs

* Inngest

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/dhruv-code297/SensAI
cd sensai
```

Install dependencies:

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root:

```
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

GEMINI_API_KEY=
```

---

# 🗄 Database Setup

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate Prisma client:

```bash
npx prisma generate
```

---

# ▶️ Run the Project

Start development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 📊 Cron Jobs

Industry insights refresh automatically every **7 days** using **Inngest scheduled jobs**.

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Tablet
* Mobile

---

# 🔮 Future Improvements

* Job recommendation system
* ATS resume score checker
* LinkedIn profile analyzer
* AI mock interview simulation

---


# 👨‍💻 Author

Dhruv 
