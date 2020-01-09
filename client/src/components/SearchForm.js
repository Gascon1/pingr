import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../pingr-logo.png";
import Dropdown from "./Dropdown";

export default function SearchForm(props) {
  const [state, setState] = useState({
    category: "",
    categoryID: "",
    services: [],
    service:"",
    requestTime: "",
    maxPrice: null,
  });


  
  const registerUser = function (newUser) {
    return axios.post(`http://localhost:8001/api/users`, newUser);
  };

  function onSave(ev) {
    // console.log(state)
    ev.preventDefault();
    registerUser(state)
      .then(() => console.log("success"))
      .catch(error => console.log("error"));
  }

  return (
    <div className="layout-padding">
      <div className="logo">
        <img src={logo} />
      </div>
      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="container">
          <label>Category</label>
          <Dropdown list={"categoryList"}
            setDropdown={(category, categoryID, services) => setState({ ...state, category, categoryID, services })}
            services={state.services}
          />

          <label>Service</label>
          <Dropdown
            categoryID={state.categoryID}
            list={"serviceList"}
            services={state.services}
          />

          <label>Time Picker</label>
          <input
            type="datetime-local"
            className="input-field"
            value={state.email}
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          <label>Max price</label>
          <input
            type="password"
            className="input-field"
            value={state.password}
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
          {/* <label>Phone number</label>
          <input
            type="tel"
            className="input-field"
            value={state.phone}
            onChange={event =>
              setState({ ...state, phone: event.target.value })
            }
          /> */}
          <button className="login-register-button login">PING</button>
        </div>
      </form>
    </div>
  );
}
