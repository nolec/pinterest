import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";

const LoginContainer = props => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = formData;
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <LoginPresenter
      {...formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default LoginContainer;
