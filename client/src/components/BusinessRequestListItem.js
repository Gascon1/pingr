import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./BusinessRequestListItem.scss";
import "./ActiveRequestsItem.scss";
import Dropdown from "./Dropdown";
import { dateFormatter } from "../helpers/dateFormatter";
import UserContext from '../UserContext'

export default function BusinessRequestListItem(props) {
  const user = useContext(UserContext)

  const [state, setState] = useState({
    requestID: props.requestID,
    businessID: user.business_id,
    serviceID: "",
    appointmentStartTime: dateFormatter(
      null,
      null,
      props.availabilityStartTime
    ),
    confirmButton: "request-cancel confirm-button text -confirmed",
    editButton: "request-cancel confirm-button text -queued hidden",
    bookButton: "request-cancel -completed confirm-button text hidden",
    availabilityStartTime: String(
      dateFormatter(null, null, props.availabilityStartTime)
    ),
    appointmentStartTime2:
      props.availabilityStartTime.slice(0, 11) +
      dateFormatter(null, null, props.availabilityStartTime)
  });

  const updateRequest = function(updatedRequestDetails) {
    return axios.put(`http://localhost:8001/api/requests`, updatedRequestDetails);
  };

  useEffect(() => {
    Promise.all([
      Promise.resolve(
        axios.get(`http://localhost:8001/api/services`, {
          params: {
            view: "businessService",
            businessID: user.business_id,
            maxPrice: props.maxPrice,
            serviceName: props.service
          }
        })
      )
    ]).then(all => {
      setState({
        ...state,
        serviceID: all[0].data.length !== 0 ? all[0].data[0].service_id : 0
      });
    });
  }, []);

  const onSave = function(ev) {
    // console.log(state)
    ev.preventDefault();
    console.log(ev);
    console.log(state);
    updateRequest(state)
      .then(() => {
        props.webSocket.send("fetchRequestList")
      })
      .catch(error => console.log("error"));
  };

  return (
    <div className="request-item -item-focus">
      <div className="request-item-header">
        <span className="request-item-category text">{props.categoryName}</span>
        <span className="request-item-service text">{props.service}</span>
      </div>
      <div className="request-inner-container business-request-margin -flex">
        <span className="request-user-name text">{props.userName}</span>
        <span className="time-container">
          <span className="request-time-start business-time text">
            {dateFormatter(null, null, props.availabilityStartTime)}
          </span>
          <span className="request-hyphen business-time text">—</span>
          <span className="request-time-end business-time text">
            {dateFormatter(null, null, props.availabilityEndTime)}
          </span>
        </span>
      </div>
      <div className="request-inner-container business-request-margin">
        <div className="card-header">
          <span className="request-availability text">REQUEST DETAILS</span>
          <hr className="separator" />
        </div>
        <span className="request-time-start text">
          <i className="far fa-clock icon-spacing"></i>
          60 mins
        </span>
        <span className="request-max-price text">
          <i className="fas fa-dollar-sign icon-spacing"></i>
          {props.maxPrice}
        </span>
      </div>
      <div className="-flex">
        {/* <Dropdown /> */}
        <input
          type="time"
          min={String(dateFormatter(null, null, props.availabilityStartTime))}
          max={String(dateFormatter(null, null, props.availabilityEndTime))}
          step="600"
          value={state.appointmentStartTime}
          className="input-field confirm-time-picker -confirmed-time"
          onChange={event =>
            setState({
              ...state,
              confirmButton: "request-cancel confirm-button text -confirmed",
              bookButton:
                "request-cancel confirm-button -completed text hidden",
              appointmentStartTime: event.target.value,
              appointmentStartTime2:
                props.availabilityStartTime.slice(0, 11) + event.target.value
            })
          }
        />
        <button
          className={state.confirmButton}
          onClick={() =>
            setState({
              ...state,
              confirmButton:
                "request-cancel confirm-button text -confirmed hidden",
              editButton: "request-cancel confirm-button text -queued",
              bookButton: "request-cancel confirm-button -completed text"
            })
          }
        >
          BOOK
        </button>
        <button
          autoComplete="off"
          type="submit"
          className={state.bookButton}
          onClick={event => onSave(event)}
        >
          CONFIRM
        </button>
      </div>
      {/* <div className={state.bookButton}>BOOK</div> */}
    </div>
  );
}

