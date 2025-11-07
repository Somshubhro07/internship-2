const express = require('express');
const cors = require('cors');
const expensesRouter = require('./routes/expenses');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const cors = require('cors');
app.use(cors({
    origin: ['https://internship-bucket-som.s3.ap-south-1.amazonaws.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));
  
app.use(express.json());

// API routes
app.use('/api/expenses', expensesRouter);

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// error handler (last)
app.use(errorHandler);

module.exports = app;
