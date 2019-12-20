import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
`;

const Container = styled.div`
  width: 100%;
  padding: 4px 12px;
`;
const ContentBox = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
`;
//==================================
const LogoBox = styled.div``;
const Logo = styled(Link)`
  &:hover > div {
    background-color: #efefef;
    transition: color 0.2s linear;
    transition: box-shadow 0.1s linear;
  }
  &:active > div {
    box-shadow: 0 0 0 3px #333;
  }
  div {
    border-radius: 999px;
    display: block;
    background-color: transparent;
    height: 48px;
    width: 48px;
    padding: 4px;
  }
  img {
    width: 100%;
  }
`;
//==================================
const SearchBox = styled.div`
  min-width: 400px;
  padding: 0px 16px;
  width: 100%;
`;
const BoxWrap = styled.div`
  height: 40px;
  border-radius: 8px;
  background-color: #efefef;
  transition: box-shadow 0.1s linear;
`;
const Item = styled.div`
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  i {
    height: 20px;
    width: 20px;
    font-size: 20px;
    color: #8e8e8e;
  }
`;
const Search = styled.div`
  width: 100%;
  height: 100%;
  form {
    height: 100%;
    input {
      background-color: transparent;
      border: none;
      color: #333;
      font-size: 16px;
      font-weight: 600;
      height: 100%;
      outline: none;
      padding: 0;
      width: 100%;
    }
  }
`;
//==================================
const ButtonBox = styled.div`
  display: flex;
`;
const Span = styled.span`
  display: block;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${props => (props.current ? "#333" : "#8e8e8e")};
`;
const Hover = styled.div`
  transition: color 0.2s linear;
  transition: box-shadow 0.1s linear;
  border-radius: 999px;
  div {
    padding: 8px;
  }
`;
const HomeBox = styled.div``;
const Home = styled(Link)`
  &:hover > ${Hover} {
    background-color: #efefef;
  }
  &:active > ${Hover} {
    box-shadow: 0 0 0 3px #333;
  }
`;
const LoginBox = styled.div``;
const Login = styled(Link)`
  &:hover > ${Hover} {
    background-color: #efefef;
  }
  &:active > ${Hover} {
    box-shadow: 0 0 0 3px #333;
  }
`;
const JoinBox = styled.div``;
const Join = styled(Link)`
  &:hover > ${Hover} {
    background-color: #efefef;
  }
  &:active > ${Hover} {
    box-shadow: 0 0 0 3px #333;
  }
`;
const ChatBox = styled.div``;
export default withRouter(({ location: { pathname } }) => {
  const [border, setBorder] = useState({ boxShadow: "none" });
  const handleFocus = () => {
    const search = document.querySelector("input[name='search']");

    search.addEventListener("focus", () => {
      setBorder({
        boxShadow: "0 0 0 3px #333"
      });
    });
    search.addEventListener("focusout", () => {
      setBorder({
        boxShadow: "none"
      });
    });
  };

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile);

  return (
    <Header>
      <Container>
        <ContentBox>
          <LogoBox>
            <Logo to="/">
              <div>
                <img
                  src={require("../../assets/img/nolec.png")}
                  role="img"
                  aria-label="로고"
                />
              </div>
            </Logo>
          </LogoBox>
          <SearchBox>
            <BoxWrap className="boxWrap" style={border}>
              <Item>
                <IconBox>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </IconBox>
                <Search>
                  <form onSubmit={e => console.log(e.target)}>
                    <input
                      onFocus={handleFocus}
                      type="text"
                      placeholder="검색"
                      name="search"
                      aria-controls="SuggestionsMenu"
                    />
                  </form>
                </Search>
              </Item>
            </BoxWrap>
          </SearchBox>
          <ButtonBox>
            <HomeBox>
              <Home to="/">
                <Hover>
                  <div>
                    <Span current={pathname === "/"}>홈</Span>
                  </div>
                </Hover>
              </Home>
            </HomeBox>
            {auth.loading ? null : (
              <>
                <LoginBox>
                  {auth.isAuthenticated ? (
                    <Login to="/" onClick={() => dispatch(logout())}>
                      <Hover>
                        <div>
                          <Span current={pathname === "/logout"}>로그아웃</Span>
                        </div>
                      </Hover>
                    </Login>
                  ) : (
                    <Login to="/login">
                      <Hover>
                        <div>
                          <Span current={pathname === "/login"}>로그인</Span>
                        </div>
                      </Hover>
                    </Login>
                  )}
                </LoginBox>
                {auth.isAuthenticated ? (
                  <JoinBox>
                    <Join to="/profile">
                      <Hover>
                        <div>
                          <Span current={pathname === "/profile"}>프로필</Span>
                        </div>
                      </Hover>
                    </Join>
                  </JoinBox>
                ) : (
                  <JoinBox>
                    <Join to="/register">
                      <Hover>
                        <div>
                          <Span current={pathname === "/register"}>
                            회원가입
                          </Span>
                        </div>
                      </Hover>
                    </Join>
                  </JoinBox>
                )}
              </>
            )}
            <ChatBox></ChatBox>
          </ButtonBox>
        </ContentBox>
      </Container>
    </Header>
  );
});

Header.propTypes = {};
