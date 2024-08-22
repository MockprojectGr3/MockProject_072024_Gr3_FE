import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import car from "../../assets/image/img.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import request from "../../util/axios";

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      await request({
        method: "post",
        serverType: "node",
        data: form,
        apiEndpoint: "api/login",
        onSuccess: (data) => {
          console.log("Login Successfuly");
          localStorage.setItem("token", data.token);
          navigate("/");
        },
        onError: (error) => {
          console.log(error);
        },
      });
    };
    fetchData();
  };

  return (
    <div className="max-w-3xl mx-auto p-5 border border-gray-300 rounded-lg shadow-md flex items-start text-left mt-5">
      <div className="flex-2 pr-5">
        <h1 className="text-xl font-semibold">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <div className="flex flex-wrap">
            <div className="flex-1 mr-2">
              <div className="mb-4">
                Email
                <label className="block mb-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
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
              <div className="mb-4">
                Password
                <label className="block mb-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password *"
                    onChange={handleChange}
                    required
                    className="w-96 p-2 border border-gray-300 rounded-md"
                  />
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
            <a href="#" className="text-sm text-blue-600 hover:underline ml-4">
              Forgot your password?
            </a>
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