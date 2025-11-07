import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth functions
export async function register(userData) {
  const res = await API.post('/api/auth/register', userData);
  return res.data;
}

export async function login(credentials) {
  const res = await API.post('/api/auth/login', credentials);
  return res.data;
}

export async function getMe() {
  const res = await API.get('/api/auth/me');
  return res.data;
}

// Expense functions
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
