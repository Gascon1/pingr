import React from "react";
import "./ActiveRequestsItem.scss";
import { useHistory } from "react-router-dom";

export default function ActiveRequestsItem(props) {
  const requestClass = `request-status text -${props.status}`;

  return (
    <div>
      <div className="request-item">
        <div className="request-inner-container">
          <div className="card-header">
            <span className="request-availability text">
              {props.serviceName}
            </span>
            <hr className="separator" />
          </div>
          {/* <span className="business-service-details text">
            <i className="far fa-file-alt icon-spacing"></i>
          </span> */}
          <span className="business-service-details text">
            <i className="fas fa-dollar-sign icon-spacing"></i>
            {props.servicePrice}
          </span>
          <span className="business-service-details text">
            <i className="far fa-clock icon-spacing"></i>{" "}
            {props.serviceDuration} mins
          </span>
        </div>
      </div>
    </div>
  );
}
