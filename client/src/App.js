import React from "react";
import "./App.scss";
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
          </div> */}
      <div className="container">
        <button className="login" type="submit">
          Login
        </button>
        <button className="register" type="submit">
          Register
        </button>
      </div>
      {/* </form>
      </div> */}
    </main>
  );
}

export default App;
