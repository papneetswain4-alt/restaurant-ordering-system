# 🍔 Foodify – Full Stack Food Ordering System

---

## 🚀 Live Demo

🌐 Frontend: https://foodify-ordering.netlify.app  
🔗 Backend API: https://restaurant-ordering-system-lfub.onrender.com  

---

## 🏷 Tech Stack

![HTML](https://img.shields.io/badge/HTML-Frontend-orange)
![CSS](https://img.shields.io/badge/CSS-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Netlify](https://img.shields.io/badge/Netlify-Frontend%20Hosting-blue)
![Render](https://img.shields.io/badge/Render-Backend%20Hosting-purple)

---

## 📌 Project Overview

Foodify is a full stack restaurant ordering web application that allows customers to browse menus, authenticate using Google Sign-In, and place food orders online.

The system also includes an admin dashboard that allows restaurant owners to manage menu items and track customer orders.

---

## ✨ Features

### 👨‍🍳 Customer Features
- Google OAuth login  
- Browse food menu  
- Place food orders  
- Responsive UI  
- Secure session storage  

---

### 👨‍💻 Admin Features
- Admin authentication  
- Add menu items  
- Delete menu items  
- View customer orders  
- Role-based access control  

---

## 📸 Screenshots

### 🏠 Home Page
<p align="center">
  <img src="Ss/Screenshot 2026-02-05 235621.png" width="700">
</p>

---

### 🍕 Menu Page
<p align="center">
  <img src="Ss/Screenshot 2026-02-05 235803.png" width="700">
</p>
<p align="center">
  <img src="Ss/Screenshot 2026-02-05 235833.png" width="700">
</p>

---

### 📊 Admin Dashboard
<p align="center">
  <img src="Ss/Screenshot 2026-02-05 235957.png" width="700">
</p>
<p align="center">
  <img src="Ss/Screenshot 2026-02-06 000025.png" width="700">
</p>

---

## 🛠 Tech Stack Details

### Frontend
- HTML5  
- CSS3  
- Vanilla JavaScript  
- Google Identity Services  

---

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- REST APIs  
- JWT Authentication  

---

### Deployment
- Netlify (Frontend Hosting)  
- Render (Backend Hosting)  
- MongoDB Atlas (Database)  

---

## 📂 Project Structure

### 🌐 Frontend Pages
- **index.html** → Landing page  
- **menu.html** → Customer menu page  
- **admin.html** → Admin dashboard  

---

### ⚙️ Frontend JavaScript
- **script.js** → Login & authentication logic  
- **menu.js** → Menu and order functionality  
- **admin.js** → Admin management logic  

---

### 🎨 Styling
- **style.css** → Main styling  
- **menu.css** → Menu styling  
- **admin.css** → Admin styling  

---

### 🖼 Assets
- **img/** → Images & UI assets  

---

### 🔧 Backend Configuration
- **config/** → Database & admin configuration  

---

### 📦 Backend Models
- **Menu.js** → Menu schema  
- **Order.js** → Order schema  

---

### 🌐 Backend Routes
- **adminAuth.js** → Admin authentication  
- **menuRoutes.js** → Menu APIs  
- **orderRoutes.js** → Order APIs  
- **customers.js** → Customer APIs  

---

### 🚀 Backend Server
- **server.js** → Backend entry point  

---

## 📡 API Routes

### Admin Routes

POST /api/admin/login

---

### Menu Routes

GET /api/menu
POST /api/menu
DELETE /api/menu/:id


---

### Order Routes

GET /api/orders
POST /api/orders

---

### Customer Routes

POST /api/customers


---

## ⚙️ Environment Variables

Create `.env` file inside backend folder:

Your secret things like **Port number** , **MongoDB URL** etc


---

## 💻 Local Setup Guide

### Clone Repository

git clone https://github.com/papneetswain4-alt/foodify.git


---

### Install Backend Dependencies
cd backend
npm install


---

### Run Backend Server
npm start


---

### Run Frontend
Open frontend folder and run:

index.html → Open with Live Server


---

## 🔐 Authentication Flow

Foodify uses Google OAuth authentication for customer login.

Flow:

1. User logs in using Google  
2. Google returns JWT credential  
3. Token is decoded  
4. User session stored in local storage  
5. User redirected to menu page  

---

## 📈 Future Improvements

- Payment gateway integration  
- Order tracking system  
- Customer order history  
- Push notifications  
- Progressive Web App support  
- Cloud image upload for menu items  

---

## 🧠 Learning Outcomes

- Full stack web development  
- REST API design  
- Authentication implementation  
- Database integration  
- Cloud deployment  
- Role-based access control  

---

## 👨‍💻 Author

Papneet  

---

## ⭐ Support

If you like this project, consider giving it a star ⭐



