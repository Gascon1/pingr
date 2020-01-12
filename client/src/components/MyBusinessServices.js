import React from "react";
import "./MyBusinessServices.scss";
import { useHistory } from "react-router-dom";

export default function MyBusinessServices(props) {
  let history = useHistory();

  return (
    <div className="request">
      <button
        className="login-register-button -confirmed add-a-service"
        onClick={() => history.push("/service-form")}
      >
        ADD A SERVICE
      </button>
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
