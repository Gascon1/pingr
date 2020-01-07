import React from "react";
import "./LandingPage.scss";
import logo from "./pingr-solo-no-bg.svg";

export default function HomePage(props) {
  return (
    <div className="flex-container">
      <img src={logo} alt="PINGR logo" className="logo" width={"120%"} />
      <div className="login-register-container">
        <button
          onClick={() => props.transition(props.login)}
          className="login"
          type="submit"
        >
          Login
        </button>
        <button
          onClick={() => props.transition(props.register)}
          className="register"
          type="submit"
        >
          Register
        </button>
      </div>
    </div>
  );
}
