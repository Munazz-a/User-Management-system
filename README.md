# 👥 User Management App

A simple Node.js and Express-based web application to manage users. You can **add**, **edit**, and **delete** users dynamically. Built with EJS for templating and designed for learning full-stack basics and CRUD operations.

---

## 🚀 Features

- ✅ Add new users with name, email, and image
- ✏️ Edit existing user details
- 🗑️ Delete users from the list
- 📊 User count displayed on home page
- 🌐 Server-side rendering using EJS

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS
- **Dev Tool**: Nodemon (for live-reloading)

---

## 📁 Project Structure

user-management/
├── views/
│   ├── index.ejs
│   ├── addUser.ejs
│   ├── edit.ejs
│   └── error.ejs
├── index.js
├── package.json
└── package-lock.json



## ✨ Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Add User Page
![Add User Page](screenshots/addUser.png)

### Manage User Page
![Manage User Page](screenshots/userManage.png)

### Edit User Page
![Edit User Page](screenshots/editUser.png)

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Munazz-a/User-management-system.git

# 2. Navigate to the project directory
cd user-management

# 3. Install dependencies
npm install express ejs nodemon

# 4. Start the application
nodemon index.js



🧩 Future Improvements
Add input validation

Connect to Mongodb for persistent storage

Add user authentication and login

Include search & filter functionality
