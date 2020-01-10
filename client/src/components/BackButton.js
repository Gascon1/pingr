import React from "react";
import { useHistory } from "react-router-dom";

export default function BackButton(props) {
  let history = useHistory();
  return (
    <i
      className="far fa-arrow-alt-circle-left back"
      onClick={() => history.goBack()}
    />
  );
}
