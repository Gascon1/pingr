import React from "react";
import { useHistory } from "react-router-dom";

export default function BackButton(props) {
  let history = useHistory();
  return (
    <i
      className="fas fa-arrow-left navbar-button"
      onClick={() => history.goBack()}
    />
  );
}
