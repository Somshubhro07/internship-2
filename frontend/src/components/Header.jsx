import React from 'react';

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Expense Tracker</h1>
      <div className="text-sm text-gray-500">Simple MERN + Vite + Tailwind</div>
    </div>
  );
}
