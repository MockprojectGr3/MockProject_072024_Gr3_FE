import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../../util/axios';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Email submitted: ', email);

    await request({
      method: 'post',
      serverType: 'node',
      apiEndpoint: 'api/forgot-password',
      data: { email },
      onSuccess: (data) => {
        console.log("Login Successfuly");
        setMessage(data.message);
        console.log('Check notice: ', data);
        navigate('/email-sent');
      },
      onError: (error) => {
        setMessage(error.response?.data?.message || 'Error occurred');
        console.log('Check eror: ', error.message);
      },
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log('Email input changed: ', e.target.value);
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
              onChange={handleEmailChange}
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
        {message && <p className="mt-4 text-red-500">{message}</p>}
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

