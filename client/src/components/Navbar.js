import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.scss";
import BackButton from "./BackButton";
import HamburgerButton from "./HamburgerButton";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  let history = useHistory();

  console.log(history.location);

  const prevPathname = history.location.pathname;
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
            onClick={() => setOpen(!open)}
            {...(open && { goBack: history.goBack })}
          />
        </div>
      )}
      {props.userType === "businessOwner" && (
        <div className="user-menu">
          <BackButton />

          <Link
            to="/business-request-list"
            className="navbar-button business-style"
          >
            <i className="fas fa-home"></i>
          </Link>
          <Link
            to="/business-matched-request"
            className="navbar-button business-style"
          >
            <i class="fas fa-wave-square"></i>
          </Link>
          <Link
            to="/myBusinessServices"
            className="navbar-button business-style"
          >
            <i className="far fa-list-alt "></i>
          </Link>
          <Link to="/history" className="navbar-button business-style">
            <i className="fas fa-history "></i>
          </Link>
          <HamburgerButton
            className="navbar-button business-style"
            setUser={props.setUser}
            prevPathname={prevPathname}
          />
        </div>
      )}
    </nav>
  );
}
