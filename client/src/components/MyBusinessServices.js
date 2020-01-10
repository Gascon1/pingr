import React from "react";
import Header from "./Header";
import "./MyBusinessServices.scss";

export default function MyBusinessServices(props) {
  return (
    <div className="request">
      <div className="request-item">
        <div className="request-item-header">
          <span className="request-item-category text">My Services</span>
        </div>
        <div className="request-inner-container">
          <div className="card-header">
            <span className="request-availability text">SWEDISH MASSAGE</span>
            <hr className="separator" />
          </div>
          <span className="business-service-details text">
            <i className="far fa-file-alt icon-spacing"></i>
          </span>
          <span className="business-service-details text">
            <i className="fas fa-dollar-sign icon-spacing"></i> 36.00
          </span>
          <span className="business-service-details text">
            <i className="far fa-clock icon-spacing"></i> 60mins
          </span>
        </div>
      </div>
    </div>
  );
}
