import React from 'react';

export default function ExpenseItem({ expense, onEdit, onDelete }) {
  const date = new Date(expense.date).toLocaleDateString();
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-charcoal-500/50 border border-gray-600 hover:bg-charcoal-500/70 transition">
      <div>
        <div className="font-semibold text-white text-lg">₹ {expense.amount.toFixed(2)}</div>
        <div className="text-sm text-gray-300">{expense.description || '—'}</div>
        <div className="text-xs text-gray-400 flex items-center gap-2">
          <span className="px-2 py-1 bg-brand-500/20 text-brand-300 rounded-full text-xs">
            {expense.category}
          </span>
          <span>{date}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={onEdit} 
          className="px-3 py-1 border border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white rounded text-sm transition"
        >
          Edit
        </button>
        <button 
          onClick={onDelete} 
          className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-sm transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
