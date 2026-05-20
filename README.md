# 🍽️ ZeroHunger

**Connect your community to fight hunger and reduce food waste.**

A community food-sharing platform where donors post surplus food and recipients request what they need.

## 🌐 Live Demo

| | URL |
|---|---|
| **Frontend** | https://zero-hunger-flax.vercel.app |
| **Backend API** | https://zerohunger-9j97.onrender.com |

## 🔑 Built-in Credentials

Use these accounts to explore the platform without signing up:

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@zerohunger.com | admin123 |
| **User (Donor)** | user@zerohunger.com | user123 |

> **Admin** can manage all food listings, users, delivery statuses, and view community impact metrics.  
> **User** can post food donations, request available food, and leave ratings.

## Features

**🎯 For Donors**
- Post available food with photos, location, quantity, and expiry
- Track your donations and community impact
- Connect directly with recipients

**👥 For Recipients**
- Browse nearby available food by category
- Request items and coordinate pickup
- Rate and thank donors

**📊 For Admins**
- Monitor all platform activity from a dedicated dashboard
- Manage users, food listings, and delivery statuses
- View community impact metrics and charts

**🤖 Chatbot**
- Built-in FAQ chatbot for platform guidance

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, React Router v6, Tailwind CSS, DaisyUI |
| **State / Data** | React Query, Axios |
| **UI Components** | Material-UI, Recharts, Swiper, Lottie |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (Neon) |
| **Auth** | bcrypt (password hashing), JWT |
| **Deployment** | Vercel (frontend) · Render (backend) · Neon (database) |

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/hasibshahriyar/ZeroHunger.git
cd ZeroHunger

# 2. Frontend
cd Uni-Project-main/Uni-Project-main
npm install
# Create .env with: VITE_API_URL=http://localhost:5000/api/v1
npm run dev

# 3. Backend
cd ../../zero-hunger-server-main/zero-hunger-server-main
npm install
# Create .env with: DATABASE_URL=your_postgresql_url
npm run dev
```

## Usage

**Donors:** Sign up → Post food with photo & details → Get notified when someone requests it.  
**Recipients:** Browse listings → Click Request → Coordinate pickup with the donor.  
**Admins:** Log in with admin credentials → Use the dashboard to manage listings and users.

---

**Authors:** Hasib Shahriyar & Mehedi Alam Nahi  
**Repository:** [github.com/hasibshahriyar/ZeroHunger](https://github.com/hasibshahriyar/ZeroHunger)

*Together, we can make sure no one in our community goes hungry.* 🤝
