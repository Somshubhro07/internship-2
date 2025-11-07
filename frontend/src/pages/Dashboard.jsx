import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../services/api';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const data = await getExpenses();
    setExpenses(data);
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

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <Header />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ExpenseForm onAdd={handleAdd} editing={editing} onUpdate={handleUpdate} onCancel={() => setEditing(null)} />
        </div>
        <div className="md:col-span-2">
          <ExpenseList expenses={expenses} onEdit={(e) => setEditing(e)} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
