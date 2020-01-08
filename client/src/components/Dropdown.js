import React from "react";
import "./Dropdown.scss";

export default function Dropdown(props) {
  return (
    <select className="dropdown">
      <option className="dropdown-item">Hello</option>
      <option>this</option>
      <option>Hello</option>
    </select>
  );
}
