# 📝 Online MCQ System

An online multiple-choice question (MCQ) exam system built using Angular for the frontend, Node.js + Express for the backend, and MongoDB for the database.

---

## 🔧 Tech Stack

- **Frontend**: Angular
- **Backend**: Node.js + Express
- **Database**: MongoDB (Atlas)
- **Style**:Tailwind CSS
- **Environment Management**: dotenv
- **Dev Tools**: Nodemon, Postman

---

## 📁 Project Structure

Online-MCQ-System/
│
├── backend/ # Node.js + Express API
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── server.js # Main server file
│ └── .env # Environment variables
│
├── frontend/ # Angular project
│ ├── src/ # Angular app code
│ └── angular.json # Angular config
│
└── README.md # Project documentation
---
## 🚀 Project Setup Instructions

🧱 1. Set Up Backend (Node.js + Express + MongoDB)

📍 Step 1: Initialize backend folder
  
-mkdir backend
-cd backend
-npm init -y
-npm install express mongoose cors dotenv
-npm install nodemon --save-dev

📍 Step 2: Manually Create Folder structure inside backend/

backend/
├── controllers/
├── models/
├── routes/
├── config/
├── .env
├── server.js

📍 Step 3: Connect MongoDB
add this in .env file

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/your-db-name            // in this project I used mongodb atlas cloud

-Replace:
<username> with the MongoDB database user (not your Atlas login!)
<password> with the correct password for that user
<cluster-url> with your cluster url, like cluster0.fsv1x.mongodb.net
<dbname> with the name of the database


📍 Step 4: Run backend

-cd backend
-npx nodemon server.js

🧠 2. Set Up Frontend (Angular)

📍 Step 1: Install Angular in your local Machine 
-npm install -g @angular/cli

📍 Step 2: Create Project Using a Name 
-ng new <project-name>     // in this project I am using name as frontend

📍 Step 3: Run frontend
-cd frontend
-ng serve

🌈 3. Tailwind CSS Setup

📍 Step 1: Install Tailwind CSS
- npm install tailwindcss @tailwindcss/postcss postcss --force

📍 Step 2: Configure PostCSS Plugins
Create a .postcssrc.json file in the root of your project and add the @tailwindcss/postcss plugin to your PostCSS configuration.
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}

📍 Step 3: Import Tailwind CSS
Add an @import to ./src/styles.css that imports Tailwind CSS
- @import "tailwindcss";



