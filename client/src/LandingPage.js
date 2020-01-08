import React from "react";
import "./LandingPage.scss";
import logo from "./pingr-logo.png";

export default function HomePage(props) {
  return (
    <div className="flex-container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="login-register-container">
        <button
          onClick={() => props.transition(props.login)}
          className="login"
          type="submit"
        >
          LOGIN
        </button>
        <button
          onClick={() => props.transition(props.register)}
          className="register"
          type="submit"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}
