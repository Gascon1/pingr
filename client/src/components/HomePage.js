import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import logo from "../pingr-logo.png";
import Header from "./Header";

export default function HomePage(props) {
  return (
    <div>
      <div className="search-box-placement">
        <h1 className="home-question">What are you looking for ?</h1>
        <Link to="searchForm">
          <button className="search-box">
            <i className="fas fa-search"></i>
            <span className="search-box-text">Click me to search!</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
