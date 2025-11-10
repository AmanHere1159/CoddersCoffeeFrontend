// LoginForm.jsx
import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    landmark: "",
    pincode: "",
  });
  const BACKEND_URL=import.meta.env.VITE_BACKENDURL

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email))
      err.email = "Enter a valid email";
    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 4)
      err.password = "Password must be at least 6 characters";
    if (!form.address.trim()) err.address = "Address is required";
    if (!form.pincode.trim()) err.pincode = "Pincode is required";
    else if (!/^\d{4,6}$/.test(form.pincode))
      err.pincode = "Enter a valid pincode";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      address: form.address,
      landmark: form.landmark,
      pincode: form.pincode,
    };

    try {
      setSubmitting(true);
    // API CALLING
      const res = await axios.post(
        `${BACKEND_URL}/Signup`,
        payload
      );
      if (res.status === 200) {
        console.log("status code is ",res.status)
        navigate("/Buyer");
      }

      // reset or keep form as needed
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h2 className="title">Signup</h2>

        <div className="row">
          <label htmlFor="name" className="text">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="row">
          <label htmlFor="email" className="text">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            type="email"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="row">
          <label htmlFor="password" className="text">
            Password
          </label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="At least 4 characters"
            type="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <small className="error">{errors.password}</small>
          )}
        </div>

        <div className="row">
          <label htmlFor="address" className="text">
            Address
          </label>
          <input
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Street / house / area"
            autoComplete="street-address"
          />
          {errors.address && <small className="error">{errors.address}</small>}
        </div>

        <div className="row">
          <label htmlFor="landmark" className="text">
            Landmark
          </label>
          <input
            id="landmark"
            name="landmark"
            value={form.landmark}
            onChange={handleChange}
            placeholder="Near (optional)"
          />
        </div>

        <div className="row">
          <label htmlFor="pincode" className="text">
            Pincode
          </label>
          <input
            id="pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="PIN / ZIP code"
            inputMode="numeric"
          />
          {errors.pincode && <small className="error">{errors.pincode}</small>}
        </div>

        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? "Please wait..." : "Login"}
        </button>
      </form>
    </div>
  );
}

/* --------------------------- LoginForm.css --------------------------- */
/* Place the CSS below into a file named LoginForm.css in the same folder */

/* Basic reset for the component */
