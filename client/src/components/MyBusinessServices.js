import React, { useEffect, useContext, useState } from "react";
import "./MyBusinessServices.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
import MyBusinessServicesItem from "./MyBusinessServicesItem";

export default function MyBusinessServices(props) {
  let history = useHistory();

  const user = useContext(UserContext);
  const [state, setState] = useState([]);

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
        console.log(response.data);
        return setState(response.data);
      });
  }, []);

  const list = state.map(service => {
    return (
      <MyBusinessServicesItem
        key={service.id}
        serviceID={service.id}
        serviceName={service.name}
        servicePrice={service.transaction_price}
        serviceDuration={service.duration}
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
