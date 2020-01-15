import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ActiveRequestsItem from "./ActiveRequestsItem";
import "./RequestList.scss";
import UserContext from "../UserContext";

export default function RequestListHistory(props) {
  const [state, setState] = useState({
    requests: []
  });
  const user = useContext(UserContext);

  useEffect(() => {
    if (user) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_HOST}/api/requests`, {
          params: {
            view: props.view,
            user_id: user.user_id,
            business_id: user.business_id
          }
        })
        .then(response => {
          return setState({ ...state, requests: response.data });
        });
    }
  }, [user]);

  const list = state.requests.map(request => {
    return (
      <ActiveRequestsItem
        key={request.id}
        setParentState={requests => setState({ ...state, requests })}
        request_id={request.request_id}
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
        requestServiceName={request.request_service_name}
        view={props.view}
        user_id={user.user_id}
      />
    );
  });

  return <ul className="request-list">{list}</ul>;
}
