import React, { useState, useContext, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import SearchForm from "./components/SearchForm";
import RequestList from "./components/RequestList";
import RequestListHistory from "./components/RequestListHistory";
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
import axios from "axios";
import { AnimatedSwitch } from "react-router-transition";
import BusinessRequestListMatched from "./components/BusinessRequestListMatched";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  if (user === null && localStorage.getItem("id_token")) {
    let token = localStorage.getItem("id_token");
    axios
      .get(`http://localhost:8001/api/users`, {
        params: { view: "updateContext", user: jwt_decode(token) }
      })
      .then(response => {
        setUser(response.data[0]);
      });
  }

  return (
    <Router>
      <UserProvider value={user}>
        <main className="layout" ref={node}>
          <HamburgerMenu setUser={setUser} open={open} setOpen={setOpen} />

          <Switch>
            {!user && (
              <Route path={"/" || "/register" || "/login"}>
                <Header userType="loggedOut" />
              </Route>
            )}
            {user && user.business_id !== 1 && (
              <Route>
                <Navbar
                  userType="businessOwner"
                  setUser={setUser}
                  open={open}
                  setOpen={setOpen}
                />
              </Route>
            )}
            {user && user.business_id === 1 && (
              <Route>
                <Navbar
                  userType="user"
                  setUser={setUser}
                  open={open}
                  setOpen={setOpen}
                />
              </Route>
            )}
          </Switch>

          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
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
              <RequestListHistory view={"history"} />
            </Route>

            <Route path="/business-matched-request">
              <BusinessRequestListMatched view={"matched"} />
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
              {/* this is hardcoded, change it to user.business_id and user.category_id */}
              <ServiceForm
                businessID={user ? user.business_id : 1}
                categoryID={user ? user.category_id : 2}
              />
            </Route>
          </AnimatedSwitch>

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
