# 🍽️ ZeroHunger - Food Donation Management System

A comprehensive web application designed to connect food donors with those in need, reducing food waste and fighting hunger in communities.

## 🌟 Overview

ZeroHunger is a full-stack web application that facilitates food donation management through an intuitive platform where donors can list available food items and users can request food based on their needs. The system includes role-based dashboards for administrators, donors, and users.

## ✨ Features

### 🎯 Core Functionality
- **Food Donation Management**: Complete CRUD operations for food items
- **Category-based Organization**: Organized food categories for easy browsing
- **Request Management**: Users can request available food items
- **Real-time Status Tracking**: Track food availability and request status
- **Expiration Date Management**: Monitor food freshness and safety

### 👥 Role-based Access Control
- **Admin Dashboard**: User management, food oversight, and system analytics
- **Donor Dashboard**: Manage donated food items and track requests
- **User Dashboard**: Browse available food and manage requests

### 📊 Analytics & Insights
- **Interactive Charts**: Visual representation of food donations and distribution
- **Statistical Analytics**: Track donation patterns and impact metrics
- **User Engagement Metrics**: Monitor platform usage and effectiveness

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-friendly interface using TailwindCSS
- **Interactive Components**: Modern React components with smooth animations
- **Dashboard Analytics**: Real-time data visualization with charts
- **Intuitive Navigation**: User-friendly interface design

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library for Tailwind
- **Recharts** - Composable charting library for React
- **React Router** - Declarative routing for React applications

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MySQL** - Relational database management system
- **mysql2** - MySQL client for Node.js with focus on performance

### Development Tools
- **Git** - Version control system
- **npm** - Package manager for Node.js
- **ESLint** - JavaScript linting utility

## 📁 Project Structure

```
ZeroHunger/
├── 📊 Database/
│   ├── schema.sql              # Complete database schema
│   └── Sql.sql                 # Database structure updates
│
├── 🎨 Frontend (Uni-Project-main/)/
│   ├── src/
│   │   ├── Components/         # Reusable UI components
│   │   │   ├── Dashboard/      # Dashboard-specific components
│   │   │   ├── CategoryCard/   # Food category components
│   │   │   └── Modal/          # Modal dialogs
│   │   ├── Pages/              # Main application pages
│   │   │   ├── AddFood/        # Add food donation page
│   │   │   ├── AvailableFood/  # Browse available food
│   │   │   ├── Dashboard/      # Role-based dashboards
│   │   │   └── FoodCategory/   # Category management
│   │   ├── Router/             # Application routing
│   │   └── hooks/              # Custom React hooks
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite configuration
│
└── 🔧 Backend (zero-hunger-server-main/)/
    ├── src/modules/
    │   ├── foods/              # Food management API
    │   ├── manageFoods/        # Food request management
    │   ├── auth/               # Authentication system
    │   ├── users/              # User management
    │   └── rating/             # Rating and review system
    ├── config/                 # Database configuration
    ├── package.json            # Backend dependencies
    └── server.js               # Main server file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MySQL** (v8.0 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasibshahriyar/ZeroHunger.git
   cd ZeroHunger
   ```

2. **Set up the database**
   ```bash
   # Create MySQL database
   mysql -u root -p
   CREATE DATABASE food_donation;
   
   # Import the schema
   mysql -u root -p food_donation < schema.sql
   ```

3. **Configure environment variables**
   ```bash
   # In zero-hunger-server-main/zero-hunger-server-main/
   # Create or update .env file
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=food_donation
   PORT=5000
   ```

4. **Install backend dependencies**
   ```bash
   cd zero-hunger-server-main/zero-hunger-server-main
   npm install
   ```

5. **Install frontend dependencies**
   ```bash
   cd ../../Uni-Project-main/Uni-Project-main
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd zero-hunger-server-main/zero-hunger-server-main
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start the frontend development server**
   ```bash
   cd Uni-Project-main/Uni-Project-main
   npm run dev
   # Frontend runs on http://localhost:3000
   ```

3. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📱 Usage

### For Donors
1. Register as a donor
2. Add food items with details (category, quantity, expiration date)
3. Manage your donations through the donor dashboard
4. Track requests for your donated food

### For Users
1. Register as a user
2. Browse available food by categories
3. Request food items you need
4. Track your request status

### For Administrators
1. Access admin dashboard
2. Manage users and their roles
3. Oversee food donations and requests
4. View system analytics and reports

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Hasib Shahriyar** - hasibshahriyar@example.com

**Project Link**: [https://github.com/hasibshahriyar/ZeroHunger](https://github.com/hasibshahriyar/ZeroHunger)

## 🙏 Acknowledgments

- Thanks to all contributors who helped make this project possible
- Inspired by the global effort to reduce food waste and fight hunger
- Built with love for the community

---

**Made with ❤️ to fight hunger and reduce food waste**