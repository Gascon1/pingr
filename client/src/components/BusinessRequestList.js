import React, { useState, useEffect } from "react";
import "./BusinessRequestList.scss";
import axios from "axios";
import BusinessRequestListItem from "./BusinessRequestListItem";

export default function BusinessRequestList(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/requests`, {
        params: { view: props.view, categoryID: 1 }
      })
      .then(response => {
        // console.log("this is what im looking at OOO", response.data);
        return setState(response.data);
      });
    console.log(state);
  }, []);

  const list = state.map(request => {
    console.log(request);
    return (
      <BusinessRequestListItem
        key={request.request_id}
        requestID={request.request_id}
        categoryID={request.category_id}
        categoryName={request.category_name}
        service={request.service_name}
        userName={request.user_name}
        availabilityStartTime={request.availability_start_time}
        availabilityEndTime={request.availability_end_time}
        maxPrice={request.max_price}
        businessID={request.business_id}
        appointmentStartTime={request.appointment_start_time}
      />
    );
  });
  return <div className="layout-padding">{list}</div>;
}
