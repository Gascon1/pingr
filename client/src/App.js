import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import SearchForm from "./components/SearchForm";
import RequestList from "./components/RequestList";
import useVisualMode from "./hooks/useVisualMode";
import SideBar from "./components/SideBar";
import History from "./components/History";
import RegisterABusiness from "./components/RegisterABusiness";
import MyBusiness from "./components/MyBusiness";
import Header from "./components/Header";
import MyBusinessHome from "./components/MyBusinessHome";

function App() {
  return (
    <Router>
      <main className="layout">
        <i className="far fa-arrow-alt-circle-left back" />
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Header />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/landingPage">
            <LandingPage />
          </Route>
          <Route path="/requestList">
            <RequestList />
          </Route>
          <Route path="/searchForm">
            <SearchForm />
          </Route>
          <Route path="/registerABusiness">
            <RegisterABusiness />
          </Route>
          <Route path="/myBusiness">
            <MyBusiness />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route>
            <History />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
