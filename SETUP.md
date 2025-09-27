# ZeroHunger Food Donation System - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MySQL Server
- Git

### 1. Database Setup
1. Install and start MySQL
2. Create database: `CREATE DATABASE food_donation;`
3. Import schema: Run `schema.sql` in MySQL

### 2. Backend Setup
```bash
cd zero-hunger-server-main/zero-hunger-server-main
npm install
npm start
```

### 3. Frontend Setup
```bash
cd Uni-Project-main/Uni-Project-main
npm install
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Chatbot: http://localhost:5000/chatbot

## 🔧 Configuration

### Environment Variables (.env)
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=food_donation
PORT=5000
```

## 📋 Features
- User Authentication (Admin, Donor, User roles)
- Food Donation Management
- Dashboard for all user types
- Rating System
- Chatbot Integration

## 🐛 Troubleshooting

### Database Connection Issues
- Ensure MySQL is running
- Check database credentials in .env
- Verify database exists

### Port Already in Use
- Kill processes on ports 3000/5000
- Or change ports in configuration

### Node.js Not Found
- Add Node.js to PATH environment variable
- Restart terminal after installation
