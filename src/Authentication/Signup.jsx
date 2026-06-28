import React, { useState } from "react";
import BrandLogo from "../assets/brandLogo.png";
import loginImage from "../assets/loginImage.png";
import { Link } from "react-router-dom";
import "../Styles_CSS_Code/Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup data:", formData);
    // TODO: send to signup API
  };

  return (
    <div className="signup-page">
      {/* Left Side Form Data */}
      <div className="signup-card">
        <img src={BrandLogo} alt="Brand logo" className="signup-logo" />
        <h2>Create account</h2>
        <p>Start managing your team's work</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                required
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Ram"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                required
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Goyal"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirmpassword">Confirm password</label>
          <input
            required
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm password"
            value={formData.confirmpassword}
            onChange={handleChange}
          />

          <button className="signup-button" type="submit">Create account</button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/" className="signup-link">Sign in</Link>
        </p>
      </div>

      {/* Right Side Image */}
      <div>
        <img src={loginImage} alt="signup" className="signup-image" />
      </div>

    </div>
  );
}

export default Signup;