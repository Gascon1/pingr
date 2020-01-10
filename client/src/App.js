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
import RegisterABusiness from "./components/RegisterABusiness";
import MyBusiness from "./components/MyBusiness";
import Header from "./components/Header";
import MyBusinessServices from "./components/MyBusinessServices";
import BackButton from "./components/BackButton";

function App() {
  return (
    <Router>
      <main className="layout">
        <BackButton />
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <Switch>
          <Route exact path="/">
            <Header userType="loggedOut" />
          </Route>
          <Route>
            <Header userType="user" />
          </Route>
        </Switch>
        <Route>
          <Header userType="businessOwner" />
        </Route>

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/homePage">
            <HomePage />
          </Route>
          <Route path="/requestList">
            <RequestList view={"active"} />
          </Route>
          <Route path="/history">
            <RequestList view={"history"} />
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
          <Route path="/myBusinessServices">
            <MyBusinessServices />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
