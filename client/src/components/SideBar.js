import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.scss";
import { withRouter } from 'react-router-dom'

import UserContext from "../UserContext";

const SideBar = function (props) {
  const { transition } = props;
  const user = useContext(UserContext);
  console.log("user from sidebar", user);
  let logout = function () {
    localStorage.clear()
    props.setUser(null);
    props.history.push('/');

  }

  return (
    <Menu right {...props}>
      <div className="user-greeting">
        <span className="text">
          Hello, {user ? user.first_name : "not logged in user"}
        </span>
        <Link to="/myBusiness" className="menu-item text">
          My Business (Could write business name)
        </Link>
        <hr />
      </div>
      <Link to="/" className="menu-item">
        Home page
      </Link>
      <a className="menu-item">Payment method</a>

      <Link to="/registerABusiness" className="menu-item">
        Register a business
      </Link>
      <a className="menu-item">Settings</a>
      <a className="menu-item" onClick ={logout}>Logout</a>
    </Menu>
  );
}

export default withRouter(SideBar)