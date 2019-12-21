import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 670;
`;
const Top = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 8px;
  position: fixed;
  background: hsla(0, 0%, 100%, 0.97);
`;
const Wrapper = styled.div``;
const Content = styled.div`
  display: flex;
`;
const Item = styled.div`
  width: 33.33333%;
  display: flex;
  overflow: hidden;
  &:first-child {
  }
  p {
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: bold;
  }
  .hidden_name {
    transition: top 0.3s linear;
    position: relative;
  }
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 48px;
  height: 48px;
  color: #fff;
  background-color: #fff;
  i {
    font-size: 22px;
  }
`;
const Bottom = styled.div`
  margin-top: 20px;
  max-width: 800px;
  width: 100%;
  padding: 0 15px;
`;
const Item2 = styled.div`
  width: 75%;
  &:last-child {
    margin-top: 24px;
    width: 25%;
  }
`;
const Avatar = styled.div`
  width: 106px;
  height: 106px;
  overflow: hidden;
  border-radius: 106px;
  border: 1px solid #e8e8e8;
  display: flex;
  margin: 0 0 0 auto;
  img {
    border-radius: 1000px;
    width: 100%;
  }
`;
const Div = styled.div`
  margin-bottom: 15px;
  h2 {
    font-size: 36px;
    font-weight: bold;
    color: black;
    letter-spacing: 0.1em;
  }
  p {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: black;
    display: flex;
    align-items: center;
  }
`;
const myProfile = ({ profile, handleScroll }) => {
  return (
    <Header>
      <Top>
        <Wrapper>
          <Content>
            <Item>
              <Button type="button">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </Button>
              <Button type="button">
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </Button>
            </Item>
            <Item>
              <p className="hidden_name" style={{ top: handleScroll() }}>
                {profile && profile.user.name}
              </p>
            </Item>
          </Content>
        </Wrapper>
      </Top>
      <Bottom>
        <Wrapper>
          <Content style={{ marginTop: "40px" }}>
            <Item2>
              <Div>
                <h2>{profile && profile.user.name}</h2>
              </Div>
              <Div>
                <p>팔로워</p>
              </Div>
              <Div>
                <p>
                  대표 스킬
                  {profile &&
                    profile.skills.map((skill, i) => (
                      <span key={i}>
                        {i === profile.skills.length - 1 ? skill : `${skill}, `}
                      </span>
                    ))}
                </p>
              </Div>
            </Item2>
            <Item2>
              <Avatar>
                <img src={profile && profile.user.avatar} />
              </Avatar>
            </Item2>
          </Content>
        </Wrapper>
      </Bottom>
    </Header>
  );
};

export default myProfile;
