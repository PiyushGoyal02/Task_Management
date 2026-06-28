import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../assets/brandLogo.png";
import "../Styles_CSS_Code/Signin.css";

function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signin data:", formData);
    // TODO: send formData to your auth API
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src={BrandLogo} alt="Brand logo" className="auth-logo" />
        <h2>Welcome back!</h2>
        <p>Sign in to your workspace</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <p className="auth-footer">
          Don't have an account? <a href="/signupNew" className="auth-signup-link">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;