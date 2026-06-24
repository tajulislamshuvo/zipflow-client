# 🚚 ZipFlow

A modern parcel delivery management platform that connects customers, riders, and administrators in a single ecosystem. ZipFlow streamlines parcel booking, rider assignment, delivery tracking, and payment management through an intuitive and responsive web application.

## 🌐 Live Demo

🔗 Live Site: https://zip-flow-a58d2.web.app/

## 📖 Overview

ZipFlow is a full-stack parcel delivery management system designed to simplify logistics operations. Users can create delivery requests, track parcel statuses, manage payments, and monitor delivery progress. Riders receive assigned deliveries and update delivery statuses, while administrators manage users, riders, and overall platform activities.

---

## ✨ Key Features

### 👤 User Features

- User authentication and authorization
- Create parcel delivery requests
- Track parcel delivery status
- Manage personal profile
- View parcel history
- Secure online payment integration

### 🚴 Rider Features

- Rider dashboard
- View assigned deliveries
- Accept or reject delivery requests
- Update parcel delivery status
- Track completed deliveries
- Delivery performance analytics

### 🛠️ Admin Features

- User management
- Rider management
- Parcel management
- Delivery monitoring
- Dashboard analytics
- Role-based access control

### 📊 Dashboard

- Overview statistics
- Delivery analytics
- Revenue insights
- User activity monitoring
- Performance tracking

---

## 🏗️ Tech Stack

### Frontend

- React.js
- React Router
- Tailwind CSS
- DaisyUI
- TanStack Query (React Query)
- Axios
- React Hook Form
- Recharts
- Firebase Authentication

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Deployment

- Firebase Hosting
- Vercel / Render
- MongoDB Atlas

---

## 📂 Project Structure

```bash
ZipFlow/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── routes/
│   │   └── providers/
│   │
│   └── public/
│
├── server/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   └── index.js
│
└── README.md
```

## 🔐 Authentication & Authorization

ZipFlow uses Firebase Authentication and JWT-based authorization.

Supported authentication methods:

- Email & Password Login
- Google Sign-In
- Protected Routes
- Role-Based Access Control (Admin, Rider, User)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/tajulislamshuvo/zipflow-client.git
cd zipflow
```

### Frontend Setup

```bash
cd zipflow-client

npm install

npm run dev
```

### Environment Variables

Create a `.env` file inside the projects.

```env
  VITE_apiKey=
  VITE_authDomain=
  VITE_projectId=
  VITE_storageBucket=
  VITE_messagingSenderId=
  VITE_appId=
  VITE_image_host=

```

---

## 📱 Responsive Design

ZipFlow is fully responsive and optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

## 🚀 Future Improvements

- Real-time parcel tracking
- Push notifications
- Rider location tracking
- Delivery route optimization
- Advanced analytics dashboard
- Multi-language support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## 👨‍💻 Developer

Developed with ❤️ by **Tajul islam shuvo**

GitHub: https://github.com/tajulislamshuvo

---

### ⭐ If you like this project, don't forget to star the repository!
