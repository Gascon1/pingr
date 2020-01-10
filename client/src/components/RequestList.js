import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ActiveRequestsItem from "./ActiveRequestsItem";
import "./RequestList.scss";
import UserContext from '../UserContext'


export default function(props) {
  const [state, setState] = useState([]);
  const user = useContext(UserContext)

  console.log("user", user);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/requests`, {
        params: { view: props.view }
      })
      .then(response => {
        return setState(response.data);
      });
    console.log(state);
  }, []);

  const list = state.map(request => {
    return (
      <ActiveRequestsItem
        category={request.category}
        service={request.service}
        status={request.status}
        availableStartTime={request.availability_start_time}
        availableEndTime={request.availability_end_time}
        appointmentTime={request.appointment_start_time}
        business_phone_number={request.business_phone_number}
        business_address={request.business_address}
        business_name={request.business_name}
        request_max_price={request.request_max_price}
        transaction_price={request.transaction_price}
      />
    );
  });

  return <ul className="request-list">{list}</ul>;
}
