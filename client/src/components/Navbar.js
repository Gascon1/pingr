import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import BackButton from "./BackButton";
import HamburgerButton from "./HamburgerButton";

export default function Navbar(props) {
  console.log(props)
  return (
    <nav>
      {props.userType === "user" && (
        <div className="user-menu">
          <BackButton />
          <Link to="/homePage">
            <i className="fas fa-home navbar-button"></i>
          </Link>
          <Link to="/requestList">
            <i className="fas fa-angle-double-up navbar-button"></i>
          </Link>
          <Link to="/history">
            <i className="fas fa-history navbar-button"></i>
          </Link>
          <HamburgerButton className="navbar-button"
            setUser={props.setUser} open={props.open} setOpen={props.setOpen}
          />
        </div>
      )}
      {props.userType === "businessOwner" && (
        <div className="user-menu">
          <Link to="/business-request-list">
            <i className="fas fa-home navbar-button"></i>
          </Link>
          <Link to="/business-matched-request">
            <i class="fas fa-wave-square navbar-button"></i>
          </Link>
          <Link to="/myBusinessServices">
            <i className="far fa-list-alt navbar-button"></i>
          </Link>
          <Link to="/history">
            <i className="fas fa-history navbar-button"></i>
          </Link>
        </div>
      )}
    </nav>
  );
}
