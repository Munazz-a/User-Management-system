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



---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Munazz-a/User-management-system.git

# 2. Navigate to project directory
cd user-management

# 3. Install dependencies
npm install express ejs nodemon

# 4. Start the application
nodemon index.js


✨ Screenshots

### Home Page
![home png](https://github.com/user-attachments/assets/577e6352-d2b4-42f4-bfef-cf685e75c482)

### Add User Page
![Add User](screenshots/addUser.png)

### Manage User Page
![Edit User](screenshots/userManage.png)

### Edit User Page
![Edit User](screenshots/editUser.png)


🧩 Future Improvements
Add input validation

Connect to MongoDB for persistent storage

Add user authentication and login

Include search & filter functionality
