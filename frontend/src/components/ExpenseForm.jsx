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
        date: new Date(editing.date).toISOString().slice(0, 10)
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
      date: form.date ? new Date(form.date) : new Date()
    };

    if (editing) onUpdate(editing._id, payload);
    else onAdd(payload);
    setForm(empty);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Amount (₹)</label>
        <input
          type="number"
          step="0.01"
          required
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <input
          type="text"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2"
          placeholder="e.g., Groceries"
        />
      </div>
      <div className="flex gap-2">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2"
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Rent</option>
            <option>Other</option>
          </select>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" type="submit">
          {editing ? 'Update' : 'Add Expense'}
        </button>
        {editing && (
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
