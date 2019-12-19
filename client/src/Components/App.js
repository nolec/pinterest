import React, { useEffect } from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
