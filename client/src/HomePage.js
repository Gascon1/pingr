import React from "react";
import "./HomePage.scss";
import logo from "./pingr-logo.png";

export default function HomePage(props) {
  return (
    <div>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="user-menu">
        <i className="fas fa-home user-menu-button"></i>
        <i class="fas fa-angle-double-up user-menu-button"></i>
        <i className="fas fa-history user-menu-button"></i>
      </div>
      <h1 className="home-question">What are you looking for ?</h1>
      <button className="search-box">
        <i className="fas fa-search"></i>
        <span className="search-box-text">Click me to search!</span>
      </button>
    </div>
  );
}
