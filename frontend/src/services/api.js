import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000'
});

export async function getExpenses() {
  const res = await API.get('/api/expenses');
  return res.data;
}

export async function createExpense(payload) {
  const res = await API.post('/api/expenses', payload);
  return res.data;
}

export async function updateExpense(id, payload) {
  const res = await API.put(`/api/expenses/${id}`, payload);
  return res.data;
}

export async function deleteExpense(id) {
  const res = await API.delete(`/api/expenses/${id}`);
  return res.data;
}
