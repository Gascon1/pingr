import React from "react";
import axios from "axios";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import SearchForm from "./components/SearchForm";
import ActiveRequests from "./components/ActiveRequests";
import useVisualMode from "./hooks/useVisualMode";
import SideBar from "./components/SideBar";
import RegisterABusiness from "./components/RegisterABusiness";

const LANDINGPAGE = "LANDINGPAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const HOMEPAGE = "HOMEPAGE";
const SEARCHFORM = "SEARCHFORM";
const ACTIVEREQUESTS = "ACTIVEREQUESTS";
const REGISTERABUSINESS = "REGISTERABUSINESS";

function App() {
  const { mode, transition, back } = useVisualMode(HOMEPAGE);

  return (
    <main className="layout">
      {mode !== LANDINGPAGE && mode !== REGISTER && mode !== LOGIN && (
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          RegisterABusiness={RegisterABusiness}
          transition={transition}
        />
      )}

      {(mode === REGISTER ||
        mode === LOGIN ||
        mode === SEARCHFORM ||
        mode === ACTIVEREQUESTS) && (
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
      {mode === LOGIN && <LoginPage />}
      {mode === REGISTER && <RegisterPage />}
      {mode === HOMEPAGE && (
        <HomePage
          transition={transition}
          searchForm={SEARCHFORM}
          activeRequests={ACTIVEREQUESTS}
        />
      )}

      {mode === SEARCHFORM && <SearchForm />}

      {mode === ACTIVEREQUESTS && <ActiveRequests transition={transition} />}

      {mode === REGISTERABUSINESS && <RegisterABusiness />}
    </main>
  );
}

export default App;
