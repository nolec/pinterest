import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Footer = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
`;
const Container = styled.div``;
const Wrapper = styled.div``;
const FooterButton = styled.div`
  display: flex;
  margin: 20px;
  > div {
    width: 45px;
    height: 45px;
    margin: 5px;
  }
  button {
    all: unset;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 0px 0px,
      rgba(0, 0, 0, 0.04) 0px 0px 0px 0.5px;
    transition-delay: 100ms;
    transition-duration: 0.85s;
    transition-timing-function: cubic-bezier(0.19, 1.32, 0.48, 1);
    :hover {
      background-color: #e8e8e8;
    }
    i {
      margin-top: 3px;
      font-size: 35px;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default withRouter(({ history }) => {
  const auth = useSelector(state => state.auth);

  if (!auth.isAuthenticated) {
    return null;
  }
  return (
    <Footer>
      <Container>
        <Wrapper>
          <FooterButton>
            <div>
              <button onClick={() => history.push("/builder")} type="button">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </FooterButton>
        </Wrapper>
      </Container>
    </Footer>
  );
});
