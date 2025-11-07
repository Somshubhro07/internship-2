const Expense = require('../models/Expense');

// GET /api/expenses
async function getExpenses(req, res, next) {
  try {
    const { start, end } = req.query; // optional date filtering
    const filter = { user: req.user._id };
    if (start || end) filter.date = {};
    if (start) filter.date.$gte = new Date(start);
    if (end) filter.date.$lte = new Date(end);

    const expenses = await Expense.find(filter).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    next(err);
  }
}

// POST /api/expenses
async function createExpense(req, res, next) {
  try {
    const { amount, description, category, date } = req.body;
    if (amount === undefined) return res.status(400).json({ message: 'amount is required' });
    const expense = await Expense.create({ 
      amount, 
      description, 
      category, 
      date, 
      user: req.user._id 
    });
    res.status(201).json(expense);
  } catch (err) {
    next(err);
  }
}

// PUT /api/expenses/:id
async function updateExpense(req, res, next) {
  try {
    const { id } = req.params;
    const update = req.body;
    const expense = await Expense.findOneAndUpdate(
      { _id: id, user: req.user._id }, 
      update, 
      { new: true }
    );
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    next(err);
  }
}

// DELETE /api/expenses/:id
async function deleteExpense(req, res, next) {
  try {
    const { id } = req.params;
    const expense = await Expense.findOneAndDelete({ _id: id, user: req.user._id });
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
}

module.exports = { getExpenses, createExpense, updateExpense, deleteExpense };
