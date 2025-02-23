# Chatify - Real-time Chat Application

## 📌 Overview
Chatify is a real-time chat web application built using **Express.js**, **MongoDB**, and **EJS**. It allows users to communicate instantly with an intuitive and responsive UI.

## 🚀 Features
- Real-time messaging with WebSockets (Socket.io)
- User authentication (Signup/Login)
- Group and private chats
- Message history stored in MongoDB
- Responsive UI using EJS templates
- Secure password hashing with bcrypt

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: EJS, CSS, JavaScript
- **Database**: MongoDB
- **Authentication**: bcrypt, JSON Web Tokens (JWT)
- **WebSockets**: Socket.io

## 🔧 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/chatify.git
cd chatify
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Setup environment variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server
```sh
npm start
```
Server will run on `http://localhost:8080`

## 🚀 Future Improvements
- Add media sharing (images, videos)
- Implement a typing indicator
- Enhance UI with Tailwind CSS
- Deploy to a cloud platform (Heroku, Vercel, etc.)

## 📜 License
This project is licensed under the **MIT License**.

💬 **Let's connect!** If you have any questions, feel free to reach out.
