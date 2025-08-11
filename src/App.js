import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="signup-container">
      <div className="left-section">
        {/* The logo and brand name could be dynamic, so wrapping them in a div is good practice. */}
        <div className="brand-container">
          {/* Using a placeholder for the logo image as per the design */}
          <div className="logo">better market</div>
        </div>
        <p>Say hello to global food and beverage producers and suppliers, all in one place</p>
      </div>
      <div className="right-section">
        <h2>Let's get started with a few simple steps</h2>

        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue="jonah64@gmail.com" required />

          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" defaultValue="Ansh Zadavadiya" required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" defaultValue="ansh123" required />

          <button type="submit">Sign up</button>
        </form>

        <p className="terms">
          By signing up, you agree to our <a href="/terms">Terms of Service</a>. Already have an account?{" "}
          <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}
