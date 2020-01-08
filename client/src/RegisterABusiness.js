import React, { useState } from "react";
import axios from "axios";
import logo from "./pingr-logo.png";

export default function RegisterPage(props) {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: ""
  });

  const registerUser = function(newUser) {
    return axios.post(`http://localhost:8001/api/create_users`, newUser);
  };

  function onSave(ev) {
    // console.log(state)
    ev.preventDefault();
    registerUser(state)
      .then(() => console.log("success"))
      .catch(error => console.log("error"));
  }

  return (
    <div>
      <div className="logo">
        <img src={logo} />
      </div>
      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="container">
          <label>Business name</label>
          <input
            type="text"
            className="input-field"
            value={state.first_name}
            onChange={event =>
              setState({ ...state, first_name: event.target.value })
            }
          />
          <label>Business email</label>
          <input
            type="email"
            className="input-field"
            value={state.last_name}
            onChange={event =>
              setState({ ...state, last_name: event.target.value })
            }
          />
          <label>Business phone number</label>
          <input
            type="tel"
            className="input-field"
            value={state.email}
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          <label>Business address</label>
          <input
            type="text"
            className="input-field"
            value={state.password}
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
          <label>Category</label>
          <input
            type="text"
            className="input-field"
            value={state.phone}
            onChange={event =>
              setState({ ...state, phone: event.target.value })
            }
          />
          <button className="login-register-button register">Register</button>
        </div>
      </form>
    </div>
  );
}