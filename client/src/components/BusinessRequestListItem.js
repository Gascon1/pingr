import React, { useState } from "react";
import "./BusinessRequestListItem.scss";
import "./ActiveRequestsItem.scss";
import { dateFormatter } from "../helpers/dateFormatter";

export default function BusinessRequestListItem(props) {
  const [state, setState] = useState({
    confirmButton: "request-cancel confirm-button text -confirmed",
    editButton: "request-cancel confirm-button text -queued hidden",
    bookButton: "request-cancel -completed confirm-button text hidden",
    appointmentTime: String(
      dateFormatter(null, null, props.availabilityStartTime)
    )
  });

  return (
    <div className="request-item -item-focus">
      <div className="request-item-header">
        <span className="request-item-category text">{props.category}</span>
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
      <div className="-flex">
        <input
          type="time"
          min={String(dateFormatter(null, null, props.availabilityStartTime))}
          max={String(dateFormatter(null, null, props.availabilityEndTime))}
          step="600"
          value={state.appointmentTime}
          className="input-field confirm-time-picker -confirmed-time"
          onChange={event =>
            setState({
              confirmButton: "request-cancel confirm-button text -confirmed",
              bookButton:
                "request-cancel confirm-button -completed text hidden",
              appointmentTime: event.target.value
            })
          }
        />
        <button
          className={state.confirmButton}
          onClick={() =>
            setState({
              confirmButton:
                "request-cancel confirm-button text -confirmed hidden",
              editButton: "request-cancel confirm-button text -queued",
              bookButton: "request-cancel confirm-button -completed text"
            })
          }
        >
          CONFIRM
        </button>
        <button
          className={state.bookButton}
          // onClick={() =>
          //   setState({
          //     confirmButton: "request-cancel confirm-button text -confirmed",
          //     editButton: "request-cancel confirm-button text -queued hidden",
          //     bookButton: "request-cancel confirm-button -completed text hidden"
          //   })
          // }
        >
          BOOK
        </button>
      </div>
      {/* <div className={state.bookButton}>BOOK</div> */}
    </div>
  );
}
