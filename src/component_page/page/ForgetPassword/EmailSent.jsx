import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmailSent() {
  const [recoveryCode, setRecoveryCode] = useState('');
  const navigate = useNavigate();

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    // Handle code submission logic
    navigate('/reset-password');
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
        <h2 className="text-2xl font-bold mb-6">Recovery Email Sent!</h2>
        <p className="mb-4">Please check your email for next steps to reset your password.</p>
        <form onSubmit={handleCodeSubmit}>
          <div className="mb-4 relative">
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              placeholder="Recovery Code *"
              id="recoveryCode"
              value={recoveryCode}
              onChange={(e) => setRecoveryCode(e.target.value)}
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

export default EmailSent;
