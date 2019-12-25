import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "../Route/Home";
import Login from "../Route/Login";
import Register from "../Route/Register";
import Profile from "../Route/Profile";
import Builder from "../Route/Builder";
import Detail from "../Route/Detail";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/builder" component={Builder} />
        <Route path="/post/:id" exact component={Detail} />
        <Redirect from="/*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};
