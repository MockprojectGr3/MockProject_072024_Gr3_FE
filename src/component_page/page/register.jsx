import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import car from "../../assets/image/img.png";
import request from "../../util/axios";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    user_name: "",
    full_name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
    day_of_birth: "",
    gender: "",
    address_id: "1",
    company_id: "2",
    role: "customer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "day_of_birth") {
      const selectedDate = new Date(value);
      const today = new Date();

      if (selectedDate > today) {
        alert("Please select a date of birth that is not in the future.");
        setForm({
          ...form,
          day_of_birth: "",
        });
        return;
      }
    }

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    const registerRequest = async () => {
      await request({
        method: "post",
        serverType: "node",
        data: form,
        apiEndpoint: "api/register",
        onSuccess: () => {
          alert("Successfully Register");
          navigate("/login");
        },
        onError: (error) => {
          console.log(error);
        },
      });
    };
    registerRequest();
  };

  return (
    <div
      style={{
        marginTop: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      <div
        style={{
          flex: "2",
          paddingRight: "20px",
        }}
      >
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              User Name
              <input
                type="text"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Full Name
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </label>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  />
                </label>
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Date of Birth
                  <input
                    type="date"
                    name="day_of_birth"
                    value={form.day_of_birth}
                    onChange={handleChange}
                    required
                    max={new Date().toISOString().split("T")[0]}
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  />
                </label>
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Gender
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Password
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "35px",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </span>
                </label>
              </div>
            </div>
            <div style={{ flex: "1", position: "relative" }}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Re-Password
                  <input
                    type={showRePassword ? "text" : "password"}
                    name="rePassword"
                    value={form.rePassword}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <span
                    onClick={() => setShowRePassword(!showRePassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "35px",
                      cursor: "pointer",
                    }}
                  >
                    {showRePassword ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined />
                    )}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                required
              />
              I agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>

          <Link
            to="/login"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#000000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              textDecoration: "none",
              cursor: "pointer",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Back to Login
          </Link>
        </form>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={car}
          alt="Car"
          style={{
            maxWidth: "100%",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}
``;

export default RegisterPage;