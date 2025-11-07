import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function AuthWrapper() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-charcoal-700">
      {isLogin ? (
        <Login onToggle={() => setIsLogin(false)} />
      ) : (
        <Signup onToggle={() => setIsLogin(true)} />
      )}
    </div>
  );
}