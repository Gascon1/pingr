import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.scss";

export default function SideBar(props) {
  return (
    <Menu right {...props}>
      <div className="user-greeting">
        <span>Hello, @enter name of the logged in user@</span>
        <hr />
      </div>
      <a className="menu-item">Register a business</a>
      <a className="menu-item">Payment method</a>
      {/* <a className="menu-item">History</a> */}
      <a className="menu-item">Settings</a>
    </Menu>
  );
}
