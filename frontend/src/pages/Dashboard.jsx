import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../services/api';
import { ArrowTrendingUpIcon, WalletIcon, ChartPieIcon } from '@heroicons/react/24/solid';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (err) {
      console.error('Failed to load expenses:', err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleAdd = async (payload) => {
    const saved = await createExpense(payload);
    setExpenses((s) => [saved, ...s]);
  };

  const handleUpdate = async (id, payload) => {
    const updated = await updateExpense(id, payload);
    setExpenses((s) => s.map(e => (e._id === id ? updated : e)));
    setEditing(null);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    setExpenses((s) => s.filter(e => e._id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  const today = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-700 via-charcoal-500 to-brand-700 text-gray-100">
      <div className="max-w-6xl mx-auto p-6 space-y-10">
        {/* Header */}
        <Header />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center shadow-md">
            <WalletIcon className="h-10 w-10 text-accent-500 mb-3" />
            <h3 className="text-lg font-semibold">Total Spent</h3>
            <p className="text-2xl font-bold mt-2 text-accent-400">₹ {total.toFixed(2)}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center shadow-md">
            <ArrowTrendingUpIcon className="h-10 w-10 text-brand-400 mb-3" />
            <h3 className="text-lg font-semibold">Total Expenses</h3>
            <p className="text-2xl font-bold mt-2 text-brand-300">{expenses.length}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center shadow-md">
            <ChartPieIcon className="h-10 w-10 text-amber-400 mb-3" />
            <h3 className="text-lg font-semibold">Last Updated</h3>
            <p className="text-base font-medium mt-2">{today}</p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-1 bg-white/10 backdrop-blur-sm p-5 rounded-2xl shadow-md">
            <ExpenseForm
              onAdd={handleAdd}
              editing={editing}
              onUpdate={handleUpdate}
              onCancel={() => setEditing(null)}
            />
          </div>

          {/* Expense List */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-sm p-5 rounded-2xl shadow-md overflow-y-auto">
            <ExpenseList
              expenses={expenses}
              onEdit={(e) => setEditing(e)}
              onDelete={handleDelete}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-10 text-gray-300 text-sm">
          <p>Built with ❤️ by <span className="font-semibold text-accent-400">Somshubhro Guha</span></p>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="https://github.com/Somshubhro07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://leetcode.com/u/Somshubhro07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              LeetCode
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/somshubhro-guha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
