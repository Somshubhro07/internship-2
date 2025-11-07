import React, { useEffect, useState } from 'react';

const empty = { amount: '', description: '', category: 'Other', date: '' };

export default function ExpenseForm({ onAdd, editing, onUpdate, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (editing) {
      setForm({
        amount: editing.amount,
        description: editing.description,
        category: editing.category,
        date: new Date(editing.date).toISOString().slice(0, 10),
      });
    } else {
      setForm(empty);
    }
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      amount: Number(form.amount),
      description: form.description,
      category: form.category,
      date: form.date ? new Date(form.date) : new Date(),
    };

    if (editing) onUpdate(editing._id, payload);
    else onAdd(payload);
    setForm(empty);
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-4 bg-charcoal-500/50 backdrop-blur-sm rounded-2xl p-4 shadow-inner border border-gray-600"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-brand-400 mb-2">
        {editing ? 'Edit Expense' : 'Add New Expense'}
      </h2>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">
          Amount (₹)
        </label>
        <input
          type="number"
          step="0.01"
          required
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="w-full p-2 rounded-md bg-charcoal-700 text-gray-100 border border-gray-600
                     focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
          placeholder="Enter amount"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">
          Description
        </label>
        <input
          type="text"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 rounded-md bg-charcoal-700 text-gray-100 border border-gray-600
                     focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
          placeholder="e.g., Groceries, Electricity Bill"
        />
      </div>

      {/* Category + Date */}
      <div className="flex gap-2">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Category
          </label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full p-2 rounded-md bg-charcoal-700 text-gray-100 border border-gray-600
                       focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Rent</option>
            <option>Other</option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Date
          </label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full p-2 rounded-md bg-charcoal-700 text-gray-100 border border-gray-600
                       focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          className="flex-1 px-4 py-2 rounded-md bg-brand-500 hover:bg-brand-600 
                     text-white font-medium shadow-md transition"
        >
          {editing ? 'Update' : 'Add Expense'}
        </button>

        {editing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-charcoal-700 hover:bg-charcoal-500 
                       text-gray-200 font-medium transition border border-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
