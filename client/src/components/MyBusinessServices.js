import React, { useEffect, useContext, useState } from "react";
import "./MyBusinessServices.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
import MyBusinessServicesItem from "./MyBusinessServicesItem";

export default function MyBusinessServices(props) {
  let history = useHistory();

  const user = useContext(UserContext);
  const [state, setState] = useState({
    services: []
  });


  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/services/`, {
        params: {
          categoryID: user ? user.category_id : 2,
          view: "myBusinessServices",
          user
        }
      })
      .then(response => {
        return setState({ ...state, services: response.data });
      });
  }, [user]);

  const list = state.services.map(service => {
    return (
      <MyBusinessServicesItem
        key={service.id}
        serviceID={service.id}
        serviceName={service.name}
        servicePrice={service.transaction_price}
        serviceDuration={service.duration}
        setParentState={services => setState({ ...state, services })}
      />
    );
  });

  return (
    <div className="request">
      <button
        className="login-register-button -confirmed add-a-service"
        onClick={() => history.push("/service-form")}
      >
        ADD A SERVICE
      </button>
      <ul className="request-list">{list}</ul>
    </div>
  );
}
