import React, { useState, useContext } from "react";
import axios from "axios";
import logo from "../pingr-logo.png";
import Dropdown from "./Dropdown";
import Header from "./Header";
import UserContext from "../UserContext";
import { Link, withRouter, useHistory } from "react-router-dom";

export default function RegisterPage(props) {
  let history = useHistory();

  const user = useContext(UserContext);

  const [state, setState] = useState({
    user_id: user ? user.user_id : "",
    category: "",
    category_id: user ? user.categories_id : "",
    business_id: "",
    business_name: "",
    business_email: "",
    business_phone: "",
    business_address: "",
    services: []
  });

  const registerBusiness = function(newBusiness) {
    return axios.post(`http://localhost:8001/api/businesses`, newBusiness);
  };

  const addBusinessToUser = function(userID) {
    return axios.put(`http://localhost:8001/api/users`, userID);
  };

  function onSave(ev) {
    ev.preventDefault();
    registerBusiness(state)
      .then(response => {
        const businessID = response.data[0].id;
        setState({ ...state, business_id: businessID });

        props.setUser({ ...user, category_id: state.category_id });
        // console.log(
        //   "this is the category id",
        //   state.category_id,
        //   "this is the user",
        //   user
        // );
        addBusinessToUser({ businessID, user_id: state.user_id }).then(() =>
          history.push("/homePage")
        );
      })
      .catch(error => console.log("error", error));
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
          <Dropdown
            list={"categoryList"}
            setDropdown={(category, category_id, services) =>
              setState({ ...state, category, category_id, services })
            }
            services={state.services}
            serviceView={props.serviceView}
          />
          <button className="login-register-button register">Register</button>
        </div>
      </form>
    </div>
  );
}
