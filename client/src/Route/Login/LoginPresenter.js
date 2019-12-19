import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, Redirect } from "react-router-dom";

const Main = styled.main``;
const Container = styled.div`
  width: 440px;
  margin: auto;
`;
const Wrapper = styled.section`
  padding: 100px 0;
`;
const Hbox = styled.div`
  width: 100%;
  padding: 30px 35px;
`;
const Hlink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 45px;
  letter-spacing: 0.2em;
  color: #c400c4;
  :hover {
    color: #c400c4;
  }
`;
const LoginBox = styled.div`
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;
const animate = keyframes`{
  0% {
    background-position : 0%
  }
  100%{
    background-position : 400%
  }
}`;
const Form = styled.form`
  width: 268px;
  min-height: 280px;
  padding: 20px 10px;
  margin: auto;
  .last-form {
    width: 100%;
    min-height: 80px;
    position: relative;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    * {
      width: 100%;
      height: 40px;
      text-align: center;
      color: #fff;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #c400c4, #03a9f4);
      background-size: 400%;
      border-radius: 5px;
      :hover {
        animation: ${animate} 8s linear infinite;
      }
    }
  }
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Input = styled.input`
  width: 100%;
  min-height: 40px;
  margin-bottom: 15px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 8px 14px;
`;

const Submit = styled.input`
  all: unset;
  cursor: pointer;
  left: 0;
  margin-bottom: 10px;
`;
const Signup = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
`;

const LoginPresenter = ({ handleSubmit, handleChange, ...formData }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <LoginBox>
            <Hbox>
              <Hlink to="/">NOLLA</Hlink>
            </Hbox>
            <Form
              className="simple-login-container"
              onSubmit={e => handleSubmit(e)}
            >
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={e => handleChange(e)}
                  required
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  value={formData.password}
                  onChange={e => handleChange(e)}
                  minLength="6"
                  required
                />
              </FormGroup>
              <FormGroup className="last-form">
                <Submit
                  type="submit"
                  value="로그인"
                  onClick={e => handleSubmit(e)}
                />
                <Signup to="/register">회원등록</Signup>
              </FormGroup>
            </Form>
          </LoginBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default LoginPresenter;
