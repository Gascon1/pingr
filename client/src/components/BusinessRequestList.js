import React, { useState, useEffect } from "react";
import "./BusinessRequestList.scss";
import axios from "axios";
import BusinessRequestListItem from "./BusinessRequestListItem";

export default function BusinessRequestList(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/requests`, {
        params: { view: props.view }
      })
      .then(response => {
        console.log("this is what im looking at OOO", response.data);
        return setState(response.data);
      });
    console.log(state);
  }, []);

  const list = state.map(request => {
    return (
      <BusinessRequestListItem
        key={request.id}
        category={request.category_name}
        service={request.service_name}
        userName={request.user_name}
        availabilityStartTime={request.availability_start_time}
        availabilityEndTime={request.availability_end_time}
        maxPrice={request.max_price}
      />
    );
  });
  return <div className="layout-padding">{list}</div>;
}
