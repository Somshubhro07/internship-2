import React from 'react';

export default function ExpenseItem({ expense, onEdit, onDelete }) {
  const date = new Date(expense.date).toLocaleDateString();
  return (
    <div className="flex items-center justify-between p-3 rounded border">
      <div>
        <div className="font-semibold">₹ {expense.amount.toFixed(2)}</div>
        <div className="text-sm text-gray-600">{expense.description || '—'}</div>
        <div className="text-xs text-gray-500">{expense.category} • {date}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={onEdit} className="px-3 py-1 border rounded text-sm">Edit</button>
        <button onClick={onDelete} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Delete</button>
      </div>
    </div>
  );
}
