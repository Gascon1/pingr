import React, { useState } from "react";
import axios from "axios";
import logo from "../pingr-logo.png";
import Dropdown from "./Dropdown";
import Header from "./Header";

export default function RegisterPage(props) {
  const [state, setState] = useState({
    user_id: "1",
    category:"",
    categoryID: "",
    business_name: "",
    business_email: "",
    business_phone: "",
    business_address: "",
    services: []
  });

  const registerBusiness = function(newBusiness) {
    return axios.post(`http://localhost:8001/api/businesses`, newBusiness);
  };

  const addBusinessToUser = function(user) {
    return axios.put(`http://localhost:8001/api/users`, user);
  };

  function onSave(ev) {
    ev.preventDefault();
    registerBusiness(state)
      .then(() => {
        console.log("success in adding business to database")
        addBusinessToUser(state)
      })
      .catch(error => console.log("error"));
  }

  return (
    <div className="layout-padding">
    
      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="container">
          <label>Business name</label>
          <input
            type="text"
            className="input-field"
            value={state.business_name}
            placeholder="ex. Business Name"
            onChange={event =>
              setState({ ...state, business_name: event.target.value })
            }
          />
          <label>Business email</label>
          <input
            type="email"
            className="input-field"
            value={state.business_email}
            placeholder="ex. my@business.com"
            onChange={event =>
              setState({ ...state, business_email: event.target.value })
            }
          />
            <label>Business address</label>
            <input
              type="text"
              className="input-field"
              value={state.business_address}
              placeholder="ex. 8990 Sherbrooke ST E, Montreal"
              onChange={event =>
                setState({ ...state, business_address: event.target.value })
              }
            />
          <label>Business phone number</label>
          <input
            type="tel"
            className="input-field"
            value={state.business_phone}
            placeholder="ex. 514-633-8624"
            onChange={event =>
              setState({ ...state, business_phone: event.target.value })
            }
          />
         <label>Category</label>
          <Dropdown list={"categoryList"}
            setDropdown={(category, categoryID, services) => setState({ ...state, category, categoryID, services })}
            services={state.services}
          />
          <button className="login-register-button register">Register</button>
        </div>
      </form>
    </div>
  );
}
