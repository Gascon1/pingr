import React, { useState} from "react";
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
import { UserProvider } from './UserContext'


function App() {


  const [user, setUser] = useState(null);
  console.log("user", user);  

  return (
    <Router>
      <UserProvider value={user}>
      <main className="layout">
        <i className="far fa-arrow-alt-circle-left back" />
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <Switch>
          <Route exact path="/">
            <Header location="landing" />
          </Route>
          <Route>
            <Header location="dontknowdontcare" />
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
            <LoginPage setUser = {setUser}/>
          </Route>
          <Route path="/register">
            <RegisterPage setUser = {setUser} />
          </Route>
          <Route path="/history">
            <RequestList view={"history"} />
          </Route>
        </Switch>
      </main>
      </UserProvider>
    </Router>
  );
}

export default App;
