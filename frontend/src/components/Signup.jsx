import React, { useState } from 'react';
import { register as registerAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Signup({ onToggle }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Attempting registration with:', { ...form, password: '***' });
      const data = await registerAPI(form);
      console.log('Registration successful:', data);
      login(data.token, data.user);
    } catch (error) {
      console.error('Registration error:', error);
      console.error('Error response:', error.response?.data);
      setError(error.response?.data?.message || error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-charcoal-700">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-charcoal-500/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-600"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-gray-300">Sign up to get started</p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded-md bg-charcoal-700 text-gray-100 border border-gray-600
                         focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-md bg-charcoal-700 text-gray-100 border border-gray-600
                         focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              minLength="6"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 rounded-md bg-charcoal-700 text-gray-100 border border-gray-600
                         focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
              placeholder="Enter your password (min 6 characters)"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-md bg-brand-500 hover:bg-brand-600 
                       text-white font-medium shadow-md transition disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>

          <div className="text-center">
            <p className="text-gray-300">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onToggle}
                className="text-accent-500 hover:text-accent-400 font-medium transition"
              >
                Sign in
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}