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
import BusinessRequestList from "./components/BusinessRequestList";
import BusinessRequestListItem from "./components/BusinessRequestListItem";
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
          {/* <Route>
            <Header userType="user" />
          </Route> */}
          <Route>
            <Header userType="businessOwner" />
          </Route>
        </Switch>

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
            <SearchForm serviceView={"searchForm"} />
          </Route>
          <Route path="/registerABusiness">
            <RegisterABusiness />
          </Route>
          <Route path="/business-request-list">
            <BusinessRequestList
              view={"businessRequests"}
              serviceView={"businessService"}
            />
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
