import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import SearchForm from "./SearchForm";
import ActiveRequests from "./ActiveRequests";
import useVisualMode from "./hooks/useVisualMode";
import SideBar from "./SideBar";

const LANDINGPAGE = "LANDINGPAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const HOMEPAGE = "HOMEPAGE";
const SEARCHFORM = "SEARCHFORM";
const ACTIVEREQUESTS = "ACTIVEREQUESTS";

function App() {
  const { mode, transition, back } = useVisualMode(ACTIVEREQUESTS);

  return (
    <main className="layout">
      {mode !== LANDINGPAGE && mode !== REGISTER && mode !== LOGIN && (
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      )}

      {(mode === REGISTER || mode === LOGIN || mode === SEARCHFORM) && (
        <i
          className="far fa-arrow-alt-circle-left back"
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
        <HomePage
          transition={transition}
          searchForm={SEARCHFORM}
          activeRequests={ACTIVEREQUESTS}
        />
      )}

      {mode === SEARCHFORM && <SearchForm back={back} />}

      {mode === ACTIVEREQUESTS && <ActiveRequests transition={transition} />}
    </main>
  );
}

export default App;
