import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../pingr-logo.png";
import Dropdown from "./Dropdown";

export default function SearchForm(props) {
  const [state, setState] = useState({
    category: "",
    categoryID: "",
    services: [],
    service: "",
    requestStartTime: "",
    requestEndTime: "",
    maxPrice: null,
    user: 1
  });

  const postRequest = function(newRequest) {
    return axios.post(`http://localhost:8001/api/requests`, newRequest);
  };

  function onSave(ev) {
    // console.log(state)
    ev.preventDefault();
    postRequest(state)
      .then(() => console.log("success"))
      .catch(error => console.log(error));
  }

  return (
    <div className="layout-padding">
      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="container">
          <label>Category</label>
          <Dropdown
            list={"categoryList"}
            setDropdown={(category, categoryID, services) =>
              setState({ ...state, category, categoryID, services })
            }
            services={state.services}
            serviceView={"searchForm"}
          />

          <label>Service</label>
          <Dropdown
            categoryID={state.categoryID}
            list={"serviceList"}
            services={state.services}
            setService={service => setState({ ...state, service })}
          />

          <label>Start Time</label>
          <input
            type="datetime-local"
            className="input-field"
            value={state.requestStartTime}
            onChange={event =>
              setState({ ...state, requestStartTime: event.target.value })
            }
          />
          <label>End Time</label>
          <input
            type="datetime-local"
            className="input-field"
            value={state.requestEndTime}
            onChange={event =>
              setState({ ...state, requestEndTime: event.target.value })
            }
          />

          <label>Max price</label>
          <input
            type="number"
            step="0.01"
            className="input-field"
            value={state.maxPrice}
            onChange={event =>
              setState({ ...state, maxPrice: event.target.value })
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
