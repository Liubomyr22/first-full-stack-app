import React from "react";
import { Link } from "react-router-dom";

import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>User Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your user name..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}
