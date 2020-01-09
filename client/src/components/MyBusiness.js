import React from "react";
import Header from "./Header";

export default function MyBusiness(props) {
  return (
    <div className="layout-padding">
      {/* <Header
        transition={props.transition}
        activeRequests={props.activeRequests}
      /> */}

      <div className="request-item">
        <div className="request-inner-container"></div>
      </div>
    </div>
  );
}
