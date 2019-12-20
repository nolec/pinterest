import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
// import { loadProfile } from "./profile";

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/users/auth");
    await dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    // dispatch(loadProfile());
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
export const register = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const { name, email, password } = formData;
  const body = { name, email, password };
  try {
    const res = await axios.post("/api/users/register", body, config);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.msg;
    console.log(errors);
    errors.forEach(error => {
      dispatch(setAlert(error.msg, "danger"));
    });
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = { email, password };
  try {
    const res = await axios.post("/api/users/login", body, config);
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.msg;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
