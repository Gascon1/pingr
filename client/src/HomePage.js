import React from "react";
import "./HomePage.scss";
import logo from "./pingr-logo.png";

export default function HomePage(props) {
  return (
    <div className="flex-container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="login-register-container">
        <button className="login" type="submit">
          Login
        </button>
        <button className="register" type="submit">
          Register
        </button>
      </div>
    </div>
  );
}
