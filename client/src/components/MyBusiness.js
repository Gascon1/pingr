import React, { useState } from "react";
import Header from "./Header";
import "./MyBusiness.scss";
import "./ActiveRequestsItem.scss";
import { dateFormatter } from "../helpers/dateFormatter";

export default function MyBusiness(props) {
  //DONT FORGET TO TALK TO ME WHEN YOURE HERE

  return (
    <div className="layout-padding">
      {/* <Header
        transition={props.transition}
        activeRequests={props.activeRequests}
      /> */}

      <div className="request-item -item-focus">
        <div className="request-item-header">
          <span className="request-item-category text">Massotherapy</span>
          <span className="request-item-service text">Swedish Massage</span>
          {/* <span className="request-item-category text">{props.category}</span>
          <span className="request-item-service text">{props.service}</span> */}
        </div>
        <div className="request-inner-container business-request-margin -flex">
          <span className="request-user-name text">SERGE</span>
          {/* <span className="request-user-rating"></span> */}
          <span className="time-container">
            <span className="request-time-start business-time text">
              12:00 PM
              {/* {dateFormatter(null, null, props.availableStartTime)} */}
            </span>
            <span className="request-hyphen business-time text">—</span>
            <span className="request-time-end business-time text">
              17:00 PM
              {/* {dateFormatter(null, null, props.availableEndTime)} */}
            </span>
          </span>
        </div>
        <div className="-flex">
          <input type="time" className="input-field confirm-time-picker" />
          {/* <div className="request-cancel -confirmed confirm-button text">
            CONFIRM
          </div> */}
          <div className="request-cancel -queued confirm-button text">EDIT</div>
        </div>
        <div className="request-cancel -completed book-button text">BOOK</div>
      </div>
    </div>
  );
}
