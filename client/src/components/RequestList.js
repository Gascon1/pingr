import React, { useState, useEffect } from "react";
import axios from "axios";

export default function(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8001/api/requests`).then(response => {
      return setState(response.data);
    });
  }, []);

  const list = state.map(request => {
    return (
      <ActiveRequestsItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{list}</ul>;
}
