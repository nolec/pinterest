import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/auth";

const LoginContainer = props => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated, []);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(login(email, password));
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <LoginPresenter
      isAuthenticated={isAuthenticated}
      {...formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default LoginContainer;
