import React, { useDebugValue } from "react";
import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./HomePage"
import useVisualMode from "./hooks/useVisualMode"

function App() {
  return (
    <main className="layout">
      <div className="logo">
        Pingr
        <hr></hr>
      </div>

      {/* <div className="container"> */}
      {/* <form>
          <div>
            <input className="input-field" placeholder="email"></input>
            <input className="input-field" placeholder="password"></input>
          </div> */} {/* </form>
      </div> */}
   {false && <HomePage/>}
     
    </main>
  );
}

export default App;
