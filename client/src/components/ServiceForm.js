import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServiceForm.scss";
import Dropdown from "./Dropdown";
import { useHistory } from "react-router-dom";

export default function ServiceFrom(props) {
  let history = useHistory();
  console.log(props.businessID);
  const [state, setState] = useState({
    serviceName: "",
    category: "",
    businessID: props.businessID,
    categoryID: props.categoryID,
    serviceDescription: "no description",
    servicePrice: "",
    serviceDuration: ""
  });

  console.log("this is what i look at", state.businessID);

  const postService = function(postParams) {
    return axios.post(`http://localhost:8001/api/services`, postParams);
  };

  function onSave(ev) {
    // console.log(state)
    ev.preventDefault();
    postService(state)
      .then(() => history.push("/business-request-list"))
      .catch(error => console.log(error));
  }

  return (
    <div className="layout-padding">
      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="request-item">
          <div className="request-item-header">
            <span className="request-item-category text">New Service</span>
          </div>
          <div className="new-service-inner-container">
            <label>Service Name</label>
            <input
              type="text"
              className="input-field"
              value={state.serviceName}
              onChange={event =>
                setState({ ...state, serviceName: event.target.value })
              }
            />
            <label>Service Price</label>
            <input
              type="number"
              className="input-field"
              value={state.servicePrice}
              onChange={event =>
                setState({ ...state, servicePrice: event.target.value })
              }
            />

            <label>Service Duration</label>
            <input
              type="number"
              className="input-field"
              value={state.serviceDuration}
              onChange={event =>
                setState({ ...state, serviceDuration: event.target.value })
              }
            />
            <button className="login-register-button login">
              CREATE SERVICE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
