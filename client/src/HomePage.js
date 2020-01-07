import React from "react";
import "./HomePage.scss";
import logo from "./pingr-solo-no-bg.svg";

export default function HomePage(props) {
  return (
    <div>
      <div className="logo">
        <svg src={logo} alt="" />
      </div>
      <div className="user-menu">
        <i className="fas fa-home user-menu-button"></i>
        <i className="fas fa-angle-double-up user-menu-button"></i>
        <i className="fas fa-history user-menu-button"></i>
      </div>
      <div className="search-box-placement">
        <h1 className="home-question">What are you looking for ?</h1>
        <button
          className="search-box"
          onClick={() => props.transition(props.searchForm)}
        >
          <i className="fas fa-search"></i>
          <span className="search-box-text">Click me to search!</span>
        </button>
      </div>
    </div>
  );
}
