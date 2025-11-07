import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onEdit, onDelete }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No expenses found. Add your first expense above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense._id}
          expense={expense}
          onEdit={() => onEdit(expense)}
          onDelete={() => onDelete(expense._id)}
        />
      ))}
    </div>
  );
}
