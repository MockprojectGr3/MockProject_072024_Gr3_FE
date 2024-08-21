import React, { useState } from "react";
import { Link } from "react-router-dom";
import car from "../../assets/image/img.png";
import { ArrowRightOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-3xl mx-auto p-5 border border-gray-300 rounded-lg shadow-md flex items-start text-left mt-5">
      <div className="flex-2 pr-5">
        <h1 className="text-xl font-semibold">Sign In</h1>
        <form className="flex flex-col mt-5">
          <div className="flex flex-wrap">
            <div className="flex-1 mr-2">
              <div className="mb-4">
                Email
                <label className="block mb-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-96 p-2 border border-gray-300 rounded-md"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex-1 mr-2">
              <div className="mb-4 relative">
                Password
                <label className="block mb-1">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                    name="password"
                    placeholder="Password *"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-96 p-2 border border-gray-300 rounded-md pr-10"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 mt-4 flex items-center pr-3 cursor-pointer"
                  >
                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
            >
              Login <ArrowRightOutlined className="ml-2" />
            </button>
            <Link
              to="/forget-password"
              className="text-sm text-blue-600 hover:underline ml-4"
            >
              Forgot your password?
            </Link>
          </div>

          <Link
            to="/register"
            className="w-full p-3 bg-black text-white text-center rounded-md mt-4 hover:bg-gray-800 block"
          >
            Create new account
          </Link>
        </form>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={car} alt="Car" className="w-100px h-100px rounded-lg" />
      </div>
    </div>
  );
}

export default LoginPage;
