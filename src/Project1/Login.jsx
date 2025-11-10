import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  // const BACKEND_URL=import.meta.env.BACKENDURL
  const BACKEND_URL=import.meta.env.VITE_BACKENDURL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Login data:", form);
    try {
      console.log("BACKEND_URL")
        const res =await axios.post(`${BACKEND_URL}/Coffee/Login`,form);
        if(res.status===201){
            // alert("Logged in Successfully");
            navigate("/Buyer");
        }
    } catch (error) {
        console.log("u typed Wrong password or email")
        console.log(error)
    }
  };
  return (
    <div className="login-containerl">
      <form className="login-forml" onSubmit={handleSubmit}>
        <h2 className="titlel">Login</h2>

        <div className="form-groupl">
          <label htmlFor="email" className="labell">
            Email
          </label>
          <input
            className="inputl"
            type="email"
            id="emaill"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-groupl">
          <label htmlFor="password" className="labell">
            Password
          </label>
          <input
            className="inputl"
            type="password"
            id="passwordl"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btnl">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
