import React from "react";
import "./LandingPage.scss";
import logo from "../pingr-logo.png";
import Header from "./Header";

export default function HomePage(props) {
  return (
    <div className="flex-container">
      {/* <Header
        transition={props.transition}
        activeRequests={props.activeRequests}
      /> */}
      {/* <div className="logo">
        <img src={logo} />
      </div> */}
      <div className="login-register-container">
        <button className="login" type="submit">
          LOGIN
        </button>
        <button className="register" type="submit">
          REGISTER
        </button>
      </div>
    </div>
  );
}
