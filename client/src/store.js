import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const state = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  state,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
