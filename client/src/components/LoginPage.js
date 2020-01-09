import React, { useState } from "react";
import "./LoginPage.scss";
import logo from "../pingr-logo.png";
import axios from "axios";

export default function LoginPage(props) {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const login = function(user) {
    return axios.post(`http://localhost:8001/api/login`, user);
  };

  function onSave(ev) {
    ev.preventDefault();
    login(state)
      .then(res => {
        setToken(res.data.token);
      })
      .catch(error => console.log("error"));
  }

  const setToken = function(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  };

  return (
    <div className="layout-padding">
      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="container">
          <label>Email Address</label>
          <input
            type="text"
            className="input-field"
            placeholder="email"
            value={state.email}
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          <label>Password</label>
          <input
            type="text"
            className="input-field"
            placeholder="password"
            value={state.password}
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
          <button className="login-register-button login">LOGIN</button>
        </div>
      </form>
    </div>
  );
}
