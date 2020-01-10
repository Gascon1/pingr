import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.scss";

export default function SideBar(props) {
  const { transition } = props;
  return (
    <Menu right {...props}>
      <div className="user-greeting">
        <span className="text">Hello, @enter name of the logged in user@</span>
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
    </Menu>
  );
}
