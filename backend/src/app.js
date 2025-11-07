const express = require('express');
const cors = require('cors');
const expensesRouter = require('./routes/expenses');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/expenses', expensesRouter);

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// error handler (last)
app.use(errorHandler);

module.exports = app;
