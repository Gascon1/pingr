import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import SearchForm from "./components/SearchForm";
import RequestList from "./components/RequestList";
import useVisualMode from "./hooks/useVisualMode";
import SideBar from "./components/SideBar";
import RegisterABusiness from "./components/RegisterABusiness";
import MyBusiness from "./components/MyBusiness";
import Header from "./components/Header";
import MyBusinessHome from "./components/MyBusinessHome";

const LANDINGPAGE = "LANDINGPAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const HOMEPAGE = "HOMEPAGE";
const SEARCHFORM = "SEARCHFORM";
const ACTIVEREQUESTS = "ACTIVEREQUESTS";
const REGISTERABUSINESS = "REGISTERABUSINESS";
const MYBUSINESS = "MYBUSINESS";
const HEADER = "HEADER";
const MYBUSINESSHOME = "MYBUSINESSHOME";

function App() {
  const { mode, transition, back } = useVisualMode(HOMEPAGE);

  return (
    <Router>
      <main className="layout">
        {(mode === REGISTER ||
          mode === LOGIN ||
          mode === SEARCHFORM ||
          mode === ACTIVEREQUESTS) && (
          <i
            className="far fa-arrow-alt-circle-left back"
            onClick={() => back()}
          />
        )}
        {mode !== LANDINGPAGE && mode !== REGISTER && mode !== LOGIN && (
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
            HomePage={HOMEPAGE}
            RegisterABusiness={REGISTERABUSINESS}
            transition={transition}
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
            searchForm={SEARCHFORM}
            transition={transition}
            activeRequests={ACTIVEREQUESTS}
          />
        )}

        {mode === SEARCHFORM && <SearchForm />}

        {mode === ACTIVEREQUESTS && <RequestList />}

        {mode === REGISTERABUSINESS && <RegisterABusiness />}

        {mode === MYBUSINESS && (
          <MyBusiness transition={transition} activeRequests={ACTIVEREQUESTS} />
        )}

        {mode === HEADER && (
          <Header transition={transition} activeRequests={ACTIVEREQUESTS} />
        )}

        {mode === MYBUSINESSHOME && <MyBusinessHome />}
      </main>
    </Router>
  );
}

export default App;
