const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth');
const expensesRouter = require('./routes/expenses');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors({
  origin: [
    'https://internship-bucket-som.s3.ap-south-1.amazonaws.com',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// API routes
app.use('/api/auth', authRouter);
app.use('/api/expenses', expensesRouter);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Global error handler
app.use(errorHandler);

module.exports = app;
