import React from "react";
import "./SignupForm.css";

export default function Signup() {
  return (
    <div className="signup-container">
      {/* Left Branding Section */}
      <div className="signup-left">
        <h1 className="brand-title">Better Market</h1>
        <p className="brand-tagline">
          Join us and get the best deals every day!
        </p>
      </div>

      {/* Right Form Section */}
      <div className="signup-right">
        <h2>Create an Account</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
