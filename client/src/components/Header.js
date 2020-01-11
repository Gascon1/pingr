import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../pingr-logo.png";

export default function Header(props) {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* make this conditional rendering with user auth */}
      {props.userType === "user" && (
        <div className="user-menu">
          <Link to="/homePage">
            <i className="fas fa-home user-menu-button"></i>
          </Link>
          <Link to="/requestList">
            <i className="fas fa-angle-double-up user-menu-button"></i>
          </Link>
          <Link to="/history">
            <i className="fas fa-history user-menu-button"></i>
          </Link>
        </div>
      )}
      {props.userType === "businessOwner" && (
        <div className="user-menu">
          <Link to="/business-request-list">
            <i className="fas fa-home user-menu-button"></i>
          </Link>
          <Link to="/myBusinessServices">
            <i className="far fa-list-alt user-menu-button"></i>
          </Link>
          <Link to="/history">
            <i className="fas fa-history user-menu-button"></i>
          </Link>
        </div>
      )}
    </div>
  );
}
