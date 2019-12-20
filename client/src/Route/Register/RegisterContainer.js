import React, { useState } from "react";
import RegisterPresenter from "./RegisterPresenter";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

const RegisterContainer = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      //서버에서 보내주는 Error 표출(action을 취할 것)
      dispatch(setAlert("패스워드가 다릅니다.", "danger"));
    } else {
      //다 오케이 되면 등록!
      dispatch(register(formData));
    }
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <RegisterPresenter
      isAuthenticated={isAuthenticated}
      {...formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default RegisterContainer;
