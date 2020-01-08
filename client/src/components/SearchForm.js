import React, { useState } from "react";
import axios from "axios";
import logo from "../pingr-logo.png";
import Dropdown from "./Dropdown";

export default function RegisterPage(props) {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: ""
  });

  const registerUser = function(newUser) {
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
          <Dropdown />
          {/* <input
            type="text"
            className="input-field"
            value={state.first_name}
            onChange={event =>
              setState({ ...state, first_name: event.target.value })
            }
          /> */}
          <label>Service</label>
          <input
            type="text"
            className="input-field"
            value={state.last_name}
            onChange={event =>
              setState({ ...state, last_name: event.target.value })
            }
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
