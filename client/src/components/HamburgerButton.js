import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";
import HamburgerMenu from "./HamburgerMenu";
import "./HamburgerButton.scss";
import "./Navbar.scss";

export default function HamburgerButton(props) {
  let history = useHistory();
  const [open, setOpen] = useState(true);

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
