import React from 'react'
import "./HomePage.scss";


export default function InterviewerList(props) {
  return (
    <div className="container">
    <button onClick={() => props.transition(props.login)} className="login" type="submit">
      Login
    </button>
    <button onClick={() => props.transition(props.register)} className="register" type="submit">
      Register
    </button>
  </div>
  )
}