import React from "react";
import "./App.scss";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import useVisualMode from "./hooks/useVisualMode";

const HOMEPAGE = "HOMEPAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

function App() {
  const { mode, transition, back } = useVisualMode(HOMEPAGE);

  return (
    <main className="layout">
      {mode === HOMEPAGE && (
        <HomePage transition={transition} login={LOGIN} register={REGISTER} />
      )}
      {mode === LOGIN && <LoginPage back={back} />}
      {mode === REGISTER && <RegisterPage back={back} />}
    </main>
  );
}

export default App;
