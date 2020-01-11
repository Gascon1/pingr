import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.scss";
import UserContext from "../UserContext";

export default function SideBar(props) {
  const { transition } = props;
  const user = useContext(UserContext);
  console.log("user from sidebar", user);
  return (
    <Menu right {...props}>
      <div className="user-greeting">
        <span className="text">
          Hello, {user ? user.first_name : "not logged in user"}
        </span>
        <Link to="/myBusiness" className="menu-item text">
          {user ? user.business_id : "this user has no business"}
        </Link>
        <hr />
      </div>
      <Link to="/" className="menu-item">
        Home page
      </Link>
      <a className="menu-item">Payment method</a>

      {!(user && user.business_id !== 1) && (
        <Link to="/registerABusiness" className="menu-item">
          Register a business
        </Link>
      )}
      <a className="menu-item">Settings</a>
    </Menu>
  );
}
