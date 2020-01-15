import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import logo from "../pingr-logo.png";
import Dropdown from "./Dropdown";
import UserContext from "../UserContext";
import { Link, withRouter, useHistory } from "react-router-dom";
import Loader from "./Loader";

const webSocket = new WebSocket(`${process.env.REACT_APP_WEBSOCKET}`);

export default function SearchForm(props) {
  let history = useHistory();

  const user = useContext(UserContext);

  const [state, setState] = useState({
    category: "",
    categoryID: "",
    services: [],
    service: "",
    requestStartTime: "",
    requestEndTime: "",
    maxPrice: 0,
    user: user.user_id
  });

  const postRequest = function(newRequest) {
    return axios.post(
      `${process.env.REACT_APP_BACKEND_HOST}/api/requests`,
      newRequest
    );
  };

  function onSave(ev) {
    ev.preventDefault();
    postRequest(state)
      .then(() => {
        history.push("/loading");
      })
      .then(() => {
        setTimeout(() => {
          history.replace("/requestlist");
          webSocket.send("fetchRequestList");
        }, 1500);
      })
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

          <label>Availability Start Time</label>
          <input
            type="datetime-local"
            className="input-field"
            value={state.requestStartTime}
            onChange={event =>
              setState({ ...state, requestStartTime: event.target.value })
            }
          />
          <label>Availability End Time</label>
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
            step="1.00"
            min="0"
            max="99999999"
            className="input-field"
            value={state.maxPrice}
            onChange={event =>
              setState({ ...state, maxPrice: event.target.value })
            }
          />
          <button className="login-register-button login">PING</button>
        </div>
      </form>
    </div>
  );
}
