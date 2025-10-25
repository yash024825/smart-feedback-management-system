
# Smart Feedback Management System

## 🚀 Overview
Smart Feedback Management System is a web-based platform designed to simplify the process of collecting, managing, and analyzing user feedback.
It enables users to submit feedback easily while allowing administrators to monitor responses, view analytics, and gain sentiment insights in real time.
Built using Node.js, Express.js, and MongoDB, this system incorporates features such as JWT authentication, email notifications, and sentiment analysis 
integration to help organizations make data-driven decisions and enhance user satisfaction.

## 🎯 Features

### 👤 User Features
- Submit feedback quickly and securely.
- Receive confirmation notifications via email.
- View status or response to submitted feedback.

### 🛠️ Admin Features
- View, manage, and respond to user feedback.
- Analyze feedback trends with real-time analytics.
- Sentiment analysis integration for smarter insights.

### 🔐 Authentication
- Secure login and signup using JWT or Passport.js.
- Role-based access for users and admins.

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| Frontend | HTML, CSS, JavaScript, Bootstrap, React (optional) |
| Backend | Node.js, Express.js |
| Database | MongoDB (or MySQL) |
| Templating | EJS |
| APIs | Sentiment Analysis API, Email API, Google reCAPTCHA |
| Authentication | JWT / Passport.js |

## 🗂️ Project Structure

Smart Feedback Management System/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── config/
│
├── frontend/
│   ├── index.html
│   ├── styles/
│   ├── scripts/
│   └── components/ (if using React)
│
├── .env
├── .gitignore
├── package.json
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/yash024825/smart-feedback-management-system.git
cd smart-feedback-management-system

### 2️⃣ Install Dependencies
For backend:
cd backend
npm install

If using React frontend:
cd ../frontend
npm install

### 3️⃣ Setup Environment Variables
Create a `.env` file in your backend folder and include:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

### 4️⃣ Run the Application
For backend:
npm start

For frontend (if using React):
npm run dev

Then open your browser at:
http://localhost:5000

## 📊 Analytics Features
- View total feedback submissions.
- Track satisfaction and sentiment scores.
- Filter and search feedback based on date, category, or rating.

## 🛡️ Security
- Passwords are encrypted using bcrypt.js.
- Authentication via JWT.
- Google reCAPTCHA to prevent spam feedback.

## 📬 API Endpoints (Sample)

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and generate JWT token |
| POST | /api/feedback | Submit feedback |
| GET | /api/feedback | Retrieve all feedback (admin only) |
| GET | /api/analytics | Get sentiment and satisfaction metrics |

## 🧠 Future Enhancements
- Add AI-powered response suggestions.
- Integrate dashboard with data visualization tools like Chart.js or D3.js.
- Add multilingual feedback support.

## 👨‍💻 Author
Tatikonda Yashwanth
GitHub: https://github.com/yash024825

## 📝 License
This project is licensed under the MIT License – you’re free to use, modify, and distribute it.

