import React from "react";
import logo from "./pingr-logo.png";

export default function RegisterPage(props) {
  return (
    <div>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="container">
        <label>First name</label>
        <input className="input-field" />
        <label>Last name</label>
        <input className="input-field" />
        <label>Email Address</label>
        <input className="input-field" />
        <label>Password</label>
        <input className="input-field" />
        <label>Phone number</label>
        <input className="input-field" />
      </div>
      <button className="login-register-button register">Register</button>
    </div>
  );
}
