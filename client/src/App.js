import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import SearchForm from "./SearchForm";
import useVisualMode from "./hooks/useVisualMode";

const LANDINGPAGE = "LANDINGPAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const HOMEPAGE = "HOMEPAGE";
const SEARCHFORM = "SEARCHFORM";

function App() {
  const { mode, transition, back } = useVisualMode(HOMEPAGE);

  return (
    <main className="layout">
      {(mode === REGISTER || mode === LOGIN) && (
        <i
          className="far fa-arrow-alt-circle-left back-button back"
          onClick={() => back()}
        />
      )}
      {mode === LANDINGPAGE && (
        <LandingPage
          transition={transition}
          login={LOGIN}
          register={REGISTER}
        />
      )}
      {mode === LOGIN && <LoginPage back={back} />}
      {mode === REGISTER && <RegisterPage back={back} />}
      {mode === HOMEPAGE && (
        <HomePage transition={transition} searchForm={SEARCHFORM} />
      )}

      {mode === SEARCHFORM && <SearchForm back={back} />}
    </main>
  );
}

export default App;
