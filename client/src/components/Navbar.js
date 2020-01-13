import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import BackButton from "./BackButton";
import HamburgerButton from "./HamburgerButton";

export default function Navbar(props) {
  return (
    <nav>
      {props.userType === "user" && (
        <div className="user-menu">
          <BackButton />
          <Link to="/homePage" className="navbar-button">
            <i className="fas fa-home "></i>
          </Link>
          <Link to="/requestList" className="navbar-button">
            <i className="fas fa-angle-double-up"></i>
          </Link>
          <Link to="/history" className="navbar-button">
            <i className="fas fa-history"></i>
          </Link>
          <HamburgerButton
            className="navbar-button"
            setUser={props.setUser}
            open={props.open}
            setOpen={props.setOpen}
          />
        </div>
      )}
      {props.userType === "businessOwner" && (
        <div className="user-menu">
          <BackButton />

          <Link to="/business-request-list" className="navbar-button">
            <i className="fas fa-home"></i>
          </Link>
          <Link to="/business-matched-request" className="navbar-button">
            <i class="fas fa-wave-square"></i>
          </Link>
          <Link to="/myBusinessServices" className="navbar-button">
            <i className="far fa-list-alt "></i>
          </Link>
          <Link to="/history" className="navbar-button">
            <i className="fas fa-history "></i>
          </Link>
          <HamburgerButton className="navbar-button" setUser={props.setUser} />
        </div>
      )}
    </nav>
  );
}
