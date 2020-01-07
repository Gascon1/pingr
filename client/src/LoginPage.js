import React from "react";
import "./LoginPage.scss";
import logo from "./pingr-logo.png";

export default function LoginPage(props) {
  return (
    <div>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="container">
        <label>Email Address</label>
        <input className="input-field" placeholder="email"></input>
        <label>Password</label>
        <input className="input-field" placeholder="password"></input>
      </div>
      <button className="login-register-button login">Login</button>
    </div>
  );
}
