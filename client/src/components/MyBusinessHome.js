import React from "react";
import Header from "./Header";
import "./MyBusinessHome.scss";

export default function MyBusinessHome(props) {
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
            <i class="far fa-file-alt icon-spacing"></i>
          </span>
          <span className="business-service-details text">
            <i className="fas fa-dollar-sign icon-spacing"></i>
          </span>
          <span className="business-service-details text">
            <i className="far fa-clock icon-spacing"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
