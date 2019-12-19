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

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" />
        <Route path="/register" />
        <Redirect from="/*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};
