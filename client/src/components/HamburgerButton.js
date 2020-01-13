import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";
import HamburgerMenu from "./HamburgerMenu";
import "./HamburgerButton.scss";
import "./Navbar.scss";

export default function HamburgerButton({ open, setOpen }) {
  return (
    <>
      <Link to="/sidebar">
        <div className="custom-hamburger-button">
          <div className="custom-hamburger-icon"></div>
          <div className="custom-hamburger-icon"></div>
          <div className="custom-hamburger-icon"></div>
        </div>
      </Link>
    </>
  );
}
