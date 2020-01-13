import React from "react";
import "./ActiveRequestsItem.scss";
import { dateFormatter } from "../helpers/dateFormatter";

export default function ActiveRequestsItem(props) {
  const requestClass = `request-status text -${props.status}`;

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
            <a target="_blank" href={`https://www.google.com/maps/place/${props.business_address}`} className="business-card">
              <span className="business-name text">{props.business_name}</span>
              <span className="business-service text">View map</span>
            </a>
            <span className="business-address text">
              <i className="fas fa-map-marker-alt icon-spacing"></i>
              {props.business_address}
            </span>
            <a href={`tel:${props.business_phone_number}`} className="business-address text">
              <i className="fas fa-mobile-alt icon-spacing"></i>
              {props.business_phone_number}
            </a>
          </div>
        )}
        {(props.status === "confirmed" || props.status === "queued") && (
          <div className="request-cancel -canceled text">CANCEL</div>
        )}
      </div>
    </div>
  );
}
