import React from "react";
import "./App.scss";
import HomePage from "./HomePage";
import useVisualMode from "./hooks/useVisualMode";
import logo from "./pingr-logo.png";

function App() {
  return (
    <main className="layout">
      <div className="logo">
        <img src={logo} />
      </div>
      {/* <div className="container"> */}
      {/* <form>
          <div>
            <input className="input-field" placeholder="email"></input>
            <input className="input-field" placeholder="password"></input>
          </div> */}{" "}
      {/* </form>
      </div> */}
      {false && <HomePage />}
    </main>
  );
}

export default App;
