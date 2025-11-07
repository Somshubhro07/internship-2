import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-charcoal-500/50 rounded-xl border border-gray-600">
      <h1 className="text-2xl font-semibold text-white">Expense Tracker</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">Welcome, {user?.name}</span>
        <button
          onClick={logout}
          className="px-3 py-1 text-sm bg-red-600 hover:bg-red-500 text-white rounded-md transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
