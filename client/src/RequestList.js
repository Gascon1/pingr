import React, { useState, useEffect } from "react";
import axios from "axios";
import ActiveRequestsItem from "./ActiveRequestsItem"


export default function (props) {
  
  const [state, setState] = useState([])

  useEffect(() => {
   axios.get(`http://localhost:8001/api/active_requests`).then((response) => {
    return setState(response.data);
  });
  console.log(state)
}, [])

const list = state.map((request) => {
  return <ActiveRequestsItem 
  category={request.category} 
  service={request.service} 
  status={request.status}
  availableStartTime={request.availability_start_time}
  appointmentTime={request.appointment_start_time}
  />
 })

 return (
  <ul>
    {list}
  </ul>
)
 

}
  
