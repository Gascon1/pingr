import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import logo from "../pingr-logo.png";

export default function Header(props) {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* make this conditional rendering with user auth */}
      <div className="user-menu">
        <Link to="/">
          <i className="fas fa-home user-menu-button"></i>
        </Link>
        <Link to="/requestList">
          <i className="fas fa-angle-double-up user-menu-button"></i>
        </Link>
        <i className="fas fa-history user-menu-button"></i>
      </div>
    </div>
  );
}
