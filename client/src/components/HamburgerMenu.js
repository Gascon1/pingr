import React, { useContext, useState } from "react";
import "./HamburgerMenu.scss";
import { withRouter, Link, useHistory } from "react-router-dom";

import UserContext from "../UserContext";

export default function HamburgerMenu(props) {
  let history = useHistory();

  let burgerClass = !props.open ? "my-class open-close-burger-menu" : "my-class"

  const user = useContext(UserContext);
  let logout = function() {
    localStorage.clear();
    props.setUser(null);
    history.push("/");
  };

  return (
    <div className={burgerClass} open={props.open}>
      <span className="my-second-class">
        Hello, {user ? user.first_name : "not logged in user"}
      </span>
      {user && (
        <Link to="/myBusiness" className="my-second-class">
          My business
        </Link>
      )}
      <hr className="separator" />
      <Link to="/homepage" className="my-second-class">
      Home page
      </Link>
      {!(user && user.business_id !== 1) && (
        <Link to="/registerABusiness" className="my-second-class">
        Register a business
        </Link>
      )}
      <Link className="my-second-class last-item-sidebar" onClick={logout}>
        Log out
      </Link>
    </div>
  );
}
