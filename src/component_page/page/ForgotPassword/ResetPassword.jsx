import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Handle password reset logic
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://gfcsecurity.vn/wp-content/uploads/2023/02/hinh-anh-ve-si-chuyen-nghiep-dep-01.jpg')" }}
    >
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2">
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">Reset your password</h2>
        <p className="mb-4">Type in your new password</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              className="w-full px-3 py-2 border rounded"
              type="password"
              placeholder="New password *"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              className="w-full px-3 py-2 border rounded"
              type="password"
              placeholder="Retry new password *"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Reset <span className="ml-2">→</span>
          </button>
        </form>
        <button
          onClick={() => navigate('/login')}
          className="block w-full text-center bg-black text-white py-2 px-4 rounded mt-4"
        >
          BACK TO LOGIN
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
