import React from "react";
import "./LoginPage.scss";
import logo from "../pingr-logo.png";

export default function LoginPage(props) {
  return (
    <div className="layout-padding">
      {/* <i
        className="far fa-arrow-alt-circle-left back-button"
        onClick={() => props.back()}
      /> */}
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="container">
        <label>Email Address</label>
        <input className="input-field" placeholder="email"></input>
        <label>Password</label>
        <input className="input-field" placeholder="password"></input>
        <button className="login-register-button login">LOGIN</button>
      </div>
    </div>
  );
}
