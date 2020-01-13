import React, { useContext, useState } from "react";
import "./HamburgerMenu.scss";
import { withRouter, Link, useHistory } from "react-router-dom";

import UserContext from "../UserContext";

export default function HamburgerMenu(props) {
  let history = useHistory();
  console.log(props);
  const user = useContext(UserContext);
  let logout = function() {
    localStorage.clear();
    history.push("/");
    props.setUser(null);
  };

  return (
    <div className="my-class">
      <span className="my-second-class x-close-button">
        <i
          class="fas fa-times"
          onClick={e => {
            console.log(history);
            e.preventDefault();
            history.goBack();
          }}
        ></i>
      </span>
      <span className="my-second-class welcome-user">
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
