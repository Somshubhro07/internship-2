# 💰 Expense Tracker

A full-stack expense tracking application built with the MERN stack, featuring user authentication, real-time expense management, and automated AWS deployment.

![Expense Tracker](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Features

### 🔐 Authentication
- **User Registration & Login** - Secure JWT-based authentication
- **Protected Routes** - Access control for authenticated users only
- **Session Management** - Persistent login with token storage

### 💸 Expense Management
- **Add Expenses** - Create new expense entries with amount, description, category, and date
- **Edit Expenses** - Update existing expense details
- **Delete Expenses** - Remove unwanted expense records
- **Category Filtering** - Organize expenses by categories (Food, Transport, Shopping, Rent, Other)
- **Date Filtering** - Filter expenses by date ranges
- **User-Specific Data** - Each user sees only their own expenses

### 🎨 Modern UI/UX
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dark Theme** - Easy on the eyes with a modern charcoal color scheme
- **Smooth Animations** - Polished transitions and hover effects
- **Intuitive Interface** - Clean and user-friendly design

### ☁️ Cloud Deployment
- **Automated CI/CD** - GitHub Actions for seamless deployment
- **AWS S3** - Frontend hosting with static website configuration
- **AWS EC2** - Backend API server with PM2 process management
- **MongoDB Atlas** - Cloud database for data persistence

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API communication
- **React Context** - State management for authentication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing and security

### DevOps & Deployment
- **GitHub Actions** - CI/CD pipeline automation
- **AWS S3** - Static website hosting for frontend
- **AWS EC2** - Virtual server for backend API
- **PM2** - Process manager for Node.js applications
- **MongoDB Atlas** - Cloud database service

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Somshubhro07/internship-2.git
cd internship-2
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "PORT=5000" > .env
echo "MONGO_URI=your_mongodb_connection_string" >> .env
echo "JWT_SECRET=your_super_secret_jwt_key" >> .env

# Start the backend server
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file (optional)
echo "VITE_API_URL=http://localhost:5000" > .env

# Start the frontend development server
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

```
expense-tracker/
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 config/
│   │   │   └── db.js              # Database connection
│   │   ├── 📁 controllers/
│   │   │   ├── authController.js   # Authentication logic
│   │   │   └── expenseController.js # Expense CRUD operations
│   │   ├── 📁 middleware/
│   │   │   ├── auth.js            # JWT authentication middleware
│   │   │   └── errorHandler.js    # Global error handling
│   │   ├── 📁 models/
│   │   │   ├── User.js            # User schema
│   │   │   └── Expense.js         # Expense schema
│   │   ├── 📁 routes/
│   │   │   ├── auth.js            # Authentication routes
│   │   │   └── expenses.js        # Expense routes
│   │   ├── app.js                 # Express app configuration
│   │   └── server.js              # Server entry point
│   ├── package.json
│   └── .env
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── AuthWrapper.jsx    # Authentication wrapper
│   │   │   ├── Login.jsx          # Login form
│   │   │   ├── Signup.jsx         # Registration form
│   │   │   ├── Header.jsx         # App header with logout
│   │   │   ├── ExpenseForm.jsx    # Add/Edit expense form
│   │   │   ├── ExpenseList.jsx    # Expense list container
│   │   │   └── ExpenseItem.jsx    # Individual expense item
│   │   ├── 📁 context/
│   │   │   └── AuthContext.jsx    # Authentication context
│   │   ├── 📁 pages/
│   │   │   └── Dashboard.jsx      # Main dashboard page
│   │   ├── 📁 services/
│   │   │   └── api.js             # API service functions
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # React entry point
│   │   └── index.css              # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.cjs        # Tailwind configuration
│   └── vite.config.js             # Vite configuration
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml             # CI/CD pipeline
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info

### Expenses (Protected Routes)
- `GET /api/expenses` - Get user's expenses
- `POST /api/expenses` - Create new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

## 🎨 Color Scheme

The application uses a modern dark theme with the following color palette:

```css
/* Brand Colors (Green) */
brand-500: #6bbf6b  /* Primary green */
brand-600: #58a85a  /* Darker green for hover states */

/* Accent Colors (Amber) */
accent-500: #ff9f2d  /* Warm amber accent */
accent-400: #ffc066  /* Lighter amber for highlights */

/* Charcoal Background */
charcoal-500: #1f2326  /* Main background */
charcoal-700: #131416  /* Darker background */
```

## 🚀 Deployment

### Automatic Deployment (Recommended)
The project includes GitHub Actions for automated deployment to AWS:

1. **Fork the repository**
2. **Set up AWS resources** (S3 bucket, EC2 instance)
3. **Configure GitHub Secrets**:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `S3_BUCKET`
   - `EC2_HOST`
   - `EC2_USER`
   - `EC2_SSH_KEY`
   - `MONGO_URI`
   - `JWT_SECRET`
   - `VITE_API_URL`

4. **Push to main branch** - Deployment will trigger automatically

### Manual Deployment

#### Frontend (S3)
```bash
cd frontend
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### Backend (EC2)
```bash
# SSH into your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Clone and setup
git clone https://github.com/Somshubhro07/internship-2.git
cd internship-2/backend
npm install
npm install -g pm2

# Create .env file with your secrets
# Start with PM2
pm2 start src/server.js --name expense-backend
pm2 save
```

## 🔒 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-tracker
JWT_SECRET=your_super_secret_jwt_key_change_in_production
```

### Frontend (.env)
```env
VITE_API_URL=https://your-api-domain.com
```

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test  # Run backend tests (if implemented)
```

### Frontend Testing
```bash
cd frontend
npm test  # Run frontend tests (if implemented)
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Somshubhro Ghosh**
- GitHub: [@Somshubhro07](https://github.com/Somshubhro07)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB team for the excellent database
- AWS for reliable cloud infrastructure
- All open-source contributors who made this project possible

## 📊 Project Status

This project is actively maintained and open for contributions. Feel free to report issues, suggest features, or submit pull requests!

---

⭐ **Star this repository if you found it helpful!**