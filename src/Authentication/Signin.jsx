import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../assets/brandLogo.png";
import "../Styles_CSS_Code/Signin.css";
import loginImage from "../assets/loginImage.png"
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NavbarAuth from "../Navbar/NavbarAuth";

function Signin() {

  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("Signin data:", formData);
    try {

      const response = await axios.post(`http://localhost:4000/api/v1/authRoutes/signin`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      console.log(response.data)
      toast.success("Successfully Signed in!", {
        position: "top-right",   
        autoClose: 2000,           
        theme: "dark",            
      });
      Navigate('/homepage')

    } catch (error) {
      console.log(error.message)
      toast.error("Signin Error!", {
        position: "top-right",   
        autoClose: 2000,           
        theme: "dark",            
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <NavbarAuth/>

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

            {
              loading ? (
                <button type="submit">Loading..</button>
              ) : (
                <button type="submit">Sign In</button>
              )
            }
            
          </form>

          <p className="auth-footer">
            Don't have an account? <a href="/signupRoute" className="auth-signup-link">Create one</a>
          </p>
        </div>

        {/* <div>
          <img
            src={loginImage}
            alt="image"
            className="ImageLogin"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Signin;