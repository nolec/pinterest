import React, { useEffect } from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import store from "../store";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
};

export default App;
