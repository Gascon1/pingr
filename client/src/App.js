import React from "react";
import "./App.scss";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import useVisualMode from "./hooks/useVisualMode";

function App() {
  return (
    <main className="layout">
      {false && <HomePage />}
      {true && <LoginPage />}
    </main>
  );
}

export default App;
