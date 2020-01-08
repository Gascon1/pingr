import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.scss";

export default function SideBar(props) {
  const { transition } = props;
  return (
    <Menu right {...props}>
      <div className="user-greeting">
        <span>Hello, @enter name of the logged in user@</span>
        <hr />
      </div>
      <a className="menu-item" onClick={() => transition(props.HomePage)}>
        Home page
      </a>

      <a className="menu-item">Payment method</a>

      <a
        className="menu-item"
        onClick={() => transition(props.RegisterABusiness)}
      >
        Register a business
      </a>
      <a className="menu-item">Settings</a>
    </Menu>
  );
}
