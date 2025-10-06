# Employee_Management_System-Hackathon
🧾 Employee Management System

A full-stack web application built for the ASE Challenge 2025, designed to manage employees, roles, departments, leaves, and company announcements — all in one place.

## 🎯 Objective

The goal of this project was to build a clean, real-world application showcasing my full-stack development skills.
The focus is on:

Writing clear and maintainable code

Implementing real functionality (CRUD, login, role-based access)

Designing a modern, interactive UI using Glassmorphism

Understanding the connection between frontend, backend, and database

## 🧱 Tech Stack

Frontend: React.js, JavaScript, Axios, React Router DOM

Backend: Node.js, Express.js

Database: MySQL

Styling: Custom CSS (Glassmorphism + Gradient UI)

Hosting: Frontend → Vercel | Backend → Render

## ✨ Features

### 👩‍💼 Admin Panel

Add, edit, or delete employees

Manage departments and roles

Approve or reject employee leave requests

Post company-wide announcements

### 👨‍💻 Employee Panel

Login securely

View personal profile

Apply for leaves and check status

See latest company announcements

## 🔐 Login Credentials

Use the following demo accounts to test both panels:

Role	Email	Password
🧑‍💼 Admin	admin@example.com
	admin123
👩‍💻 Employee	snehal@example.com
	snehal123

## ⚙️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/Snehal586/Employee_Management_System-Hackathon.git
cd Employee_Management_System-Hackathon

2️⃣ Setup Backend
cd backend
npm install
npm start

➡️ Backend will run at:
👉 http://localhost:5000


### Make sure MySQL is running and update .env with your DB details.
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_management
PORT=5000

3️⃣ Setup Frontend
cd frontend
npm install
npm start

➡️ Frontend will run at:
👉 http://localhost:3000

## 🌍 Live Demo

Frontend: 🔗 https://employee-management-system-hackatho.vercel.app

Backend: ⚙️  https://employee-management-system-hackathon.onrender.com

## Design & Thought Process

I focused on creating a modern, minimal UI using Glassmorphism and subtle gradients.
All pages are responsive and simple to navigate.
For authentication, I used role-based logic to separate Admin and Employee panels.
