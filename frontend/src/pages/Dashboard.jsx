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
      console.log('Loading expenses...');
      const data = await getExpenses();
      console.log('Expenses loaded:', data);
      setExpenses(data);
    } catch (err) {
      console.error('Failed to load expenses:', err);
      console.error('Error details:', err.response?.data);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleAdd = async (payload) => {
    try {
      console.log('Adding expense:', payload);
      const saved = await createExpense(payload);
      console.log('Expense saved:', saved);
      setExpenses((s) => [saved, ...s]);
    } catch (err) {
      console.error('Failed to add expense:', err);
      console.error('Error details:', err.response?.data);
    }
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
    <div className="w-full text-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-charcoal-500/50 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center shadow-md border border-gray-600">
            <WalletIcon className="h-10 w-10 text-accent-500 mb-3" />
            <h3 className="text-lg font-semibold text-white">Total Spent</h3>
            <p className="text-2xl font-bold mt-2 text-accent-400">₹ {total.toFixed(2)}</p>
          </div>

          <div className="bg-charcoal-500/50 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center shadow-md border border-gray-600">
            <ArrowTrendingUpIcon className="h-10 w-10 text-brand-400 mb-3" />
            <h3 className="text-lg font-semibold text-white">Total Expenses</h3>
            <p className="text-2xl font-bold mt-2 text-brand-300">{expenses.length}</p>
          </div>

          <div className="bg-charcoal-500/50 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center shadow-md border border-gray-600">
            <ChartPieIcon className="h-10 w-10 text-accent-400 mb-3" />
            <h3 className="text-lg font-semibold text-white">Last Updated</h3>
            <p className="text-base font-medium mt-2 text-gray-300">{today}</p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-1">
            <ExpenseForm
              onAdd={handleAdd}
              editing={editing}
              onUpdate={handleUpdate}
              onCancel={() => setEditing(null)}
            />
          </div>

          {/* Expense List */}
          <div className="lg:col-span-2 bg-charcoal-500/50 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-gray-600">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Expenses</h3>
            <div className="max-h-96 overflow-y-auto">
              <ExpenseList
                expenses={expenses}
                onEdit={(e) => setEditing(e)}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-6 text-gray-400 text-sm">
          <p>Built with ❤️ by <span className="font-semibold text-accent-400">Somshubhro Guha</span></p>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="https://github.com/Somshubhro07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://leetcode.com/u/Somshubhro_7//"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              LeetCode
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/somshubhro-guha-46b892272/"
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
