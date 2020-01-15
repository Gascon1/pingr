import React, { useContext } from "react";
import "./ActiveRequestsItem.scss";
import { dateFormatter } from "../helpers/dateFormatter";
import axios from "axios";
import { Link, withRouter, useHistory } from "react-router-dom";
import UserContext from "../UserContext";

const ActiveRequestsItem = function(props) {
  const requestClass = `request-status text -${props.status}`;
  let history = useHistory();
  const user = useContext(UserContext);

  const updateRequest = function(updatedRequestDetails) {
    return axios.put(`${process.env.REACT_APP_BACKEND_HOST}/api/requests`, {
      action: "cancel",
      request_id: props.request_id
    });
  };

  function onCancel(ev) {
    ev.preventDefault();
    updateRequest()
      .then(res => {
        console.log("THIS IS PROPS.VIEW", props.view);
        console.log("THIS IS PROPS.USER_ID", props.user_id);
        console.log("THIS IS USER.BUSINESS_ID", user.business_id);
        axios
          .get(`${process.env.REACT_APP_BACKEND_HOST}/api/requests`, {
            params: {
              view: props.view,
              user_id: props.user_id,
              business_id: user.business_id
            }
          })
          .then(response => {
            console.log(">>>>>RESPONSE.DATA>>>>>>>>>>", response.data);
            props.setParentState(response.data);
          });
      })
      .catch(error => console.log("error"));
  }

  return (
    <div className="request">
      <div className="request-item">
        <div className="request-item-header">
          <span className="request-item-category text">{props.category}</span>
          <span className="request-item-service text">
            {props.service || props.requestServiceName}
          </span>
        </div>
        <div className="request-inner-container">
          <div className="card-header">
            <span className="request-availability text">REQUEST STATUS</span>
            <hr className="separator" />
          </div>
          <span className={requestClass}>
            <i className="far fa-check-circle icon-spacing"></i>
            {props.status.toUpperCase()}
          </span>
          {props.appointmentTime !== null && (
            <span className="request-confirmed-time text">
              {dateFormatter(props.appointmentTime, null, null)}
            </span>
          )}
          {props.appointmentTime !== null && (
            <span className="business-address text">
              <i className="fas fa-dollar-sign icon-spacing"></i>
              {props.transaction_price}
            </span>
          )}
        </div>
        <div className="request-inner-container">
          <div className="card-header">
            <span className="request-availability text">REQUEST DETAILS</span>
            <hr className="separator" />
          </div>
          <span className="request-date text">
            <i className="far fa-calendar icon-spacing"></i>
            {dateFormatter(null, props.availableStartTime, null)}
          </span>
          <span className="request-time-start text">
            <i className="far fa-clock icon-spacing"></i>
            {dateFormatter(null, null, props.availableStartTime)}
          </span>
          <span className="request-hyphen text">—</span>
          <span className="request-time-end text">
            {dateFormatter(null, null, props.availableEndTime)}
          </span>
          <span className="request-max-price text">
            <i className="fas fa-dollar-sign icon-spacing"></i>
            {props.request_max_price}
          </span>
        </div>
        {(props.status === "confirmed" || props.status === "completed") && (
          <div className="request-inner-container">
            <div className="card-header">
              <span className="request-availability text">
                BUSINESS DETAILS
              </span>
              <hr className="separator" />
            </div>
            <a
              target="_blank"
              href={`https://www.google.com/maps/place/${props.business_address}`}
              className="business-card"
            >
              <span className="business-name text">{props.business_name}</span>
              <span className="business-service text">View map</span>
            </a>
            <span className="business-address text">
              <i className="fas fa-map-marker-alt icon-spacing"></i>
              {props.business_address}
            </span>
            <a
              href={`tel:${props.business_phone_number}`}
              className="business-address text"
            >
              <i className="fas fa-mobile-alt icon-spacing"></i>
              {props.business_phone_number}
            </a>
          </div>
        )}
        {(props.status === "confirmed" || props.status === "queued") && (
          <div
            className="request-cancel -canceled text"
            onClick={event => onCancel(event)}
          >
            CANCEL
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(ActiveRequestsItem);
