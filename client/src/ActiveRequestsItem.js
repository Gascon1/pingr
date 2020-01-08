import React from "react";
import "./ActiveRequestsItem.scss";

export default function ActiveRequestsItem(props) {
  return (
    <div className="request">
      <div className="request-item">
        <div className="request-item-header">
          <span className="request-item-category text">Barber Shop</span>
          <span className="request-item-service text">Beard trim</span>
        </div>
        <div className="request-status-container">
          <span className="request-status text">
            <i class="far fa-check-circle icon-spacing"></i>CONFIRMED
          </span>
          <span className="request-confirmed-time text">
            Jan. 20, 2020, 2:20 p.m.
          </span>
          <hr className="separator" />
        </div>
        <div className="request-availability-container">
          <span className="request-availability text">Request details</span>
          <span className="request-date text">Jan. 22, 2020</span>
          <span className="request-time-start text">12:00 p.m.</span>
          <span className="request-hyphen text">—</span>
          <span className="request-time-end text">5:00 p.m.</span>
        </div>
        <div className="request-confirmed-tab">
          <div className="business-card">
            <span className="business-name text">Joe's Panini</span>
            <span className="business-service text">View map</span>
          </div>
          <span className="business-address text">
            <i class="fas fa-map-marker-alt icon-spacing"></i>5322 St Laurent
            Blvd, Montreal
          </span>
          <span className="business-address text">
            <i class="fas fa-dollar-sign icon-spacing"></i>25.00
          </span>
          <span className="business-address text">
            <i class="fas fa-mobile-alt icon-spacing"></i>514-775-1524
          </span>
        </div>
        <div className="request-cancel text">CANCEL</div>
      </div>
    </div>
  );
}
