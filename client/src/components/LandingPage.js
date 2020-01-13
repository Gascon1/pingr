import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import logo from "../pingr-logo.png";
import Header from "./Header";

export default function HomePage(props) {
  return (
    <div className="flex-container">
      <div className="login-register-container">
        <Link to="/login">
          <button className="login" type="submit">
            LOGIN
          </button>
        </Link>
        <Link to="/register" className="landing-page-buttons">
          <button className="register" type="submit">
            REGISTER
          </button>
        </Link>
      </div>
    </div>
  );
}
