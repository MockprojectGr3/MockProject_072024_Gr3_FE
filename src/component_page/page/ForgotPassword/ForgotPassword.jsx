import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic
    navigate('/email-sent');
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
        <p className="mb-4">Type in your registered email address to reset password</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              className="w-full px-3 py-2 border rounded"
              type="email"
              placeholder="Email Address *"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Next <span className="ml-2">→</span>
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

export default ForgetPassword;
