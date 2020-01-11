import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import SearchForm from "./components/SearchForm";
import RequestList from "./components/RequestList";
import SideBar from "./components/SideBar";
import RegisterABusiness from "./components/RegisterABusiness";
import BusinessRequestList from "./components/BusinessRequestList";
import BusinessRequestListItem from "./components/BusinessRequestListItem";
import Header from "./components/Header";
import { UserProvider } from "./UserContext";
import BackButton from "./components/BackButton";
import MyBusinessServices from "./components/MyBusinessServices";
import ServiceForm from "./components/ServiceForm";
import Navbar from "./components/Navbar";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);

  if (user === null && localStorage.getItem("id_token")) {
    let token = localStorage.getItem("id_token");
    let user = jwt_decode(token);
    console.log("user", user);
    setUser({ ...user, user });
  }

  return (
    <Router>
      <UserProvider value={user}>
        <main className="layout">
          <BackButton />
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

          <Switch>
            {!user && (
              <Route path={"/" || "/register" || "/login"}>
                <Header userType="loggedOut" />
              </Route>
            )}
            {user && user.business_id !== 1 && (
              <Route>
                <Header userType="businessOwner" />
              </Route>
            )}
            {user && user.business_id === 1 && (
              <Route>
                <Header userType="user" />
              </Route>
            )}
          </Switch>

          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/register">
              <RegisterPage setUser={setUser} />
            </Route>

            <Route path="/login">
              <LoginPage setUser={setUser} />
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
              <RegisterABusiness setUser={setUser} serviceView={"searchForm"} />
            </Route>

            <Route path="/business-request-list">
              <BusinessRequestList
                view={"businessRequests"}
                serviceView={"businessService"}
              />
            </Route>

            <Route path="/myBusinessServices">
              <MyBusinessServices />
            </Route>
            <Route path="/service-form">
              <ServiceForm />
            </Route>
          </Switch>

          <Switch>
            <Route path="/navbar">
              <Navbar />
            </Route>
          </Switch>
        </main>
      </UserProvider>
    </Router>
  );
}

export default App;
