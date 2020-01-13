import React, { useState } from "react";
import "./HamburgerButton.scss";
import "./Navbar.scss";

export default function HamburgerButton({open, setOpen}) {
  return (
    <div
      open={open}
      className="custom-hamburger-button"
      onClick={() => setOpen(!open)}
    >
      <div className="custom-hamburger-icon"></div>
      <div className="custom-hamburger-icon"></div>
      <div className="custom-hamburger-icon"></div>
    </div>
  );
}
