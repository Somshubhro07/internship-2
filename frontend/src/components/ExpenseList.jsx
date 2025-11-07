import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses = [], onEdit, onDelete }) {
  if (!expenses.length) {
    return <div className="text-gray-500">No expenses yet. Add one!</div>;
  }
  return (
    <div className="space-y-3">
      {expenses.map((e) => (
        <ExpenseItem key={e._id} expense={e} onEdit={() => onEdit(e)} onDelete={() => onDelete(e._id)} />
      ))}
    </div>
  );
}
