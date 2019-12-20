import React from "react";
import styled from "styled-components";
import MyProfile from "../../Components/layouts/Profile/myProfile";
import { Redirect } from "react-router-dom";

const Main = styled.main`
  /* height: calc(100vh - 164px); */
  height: 100vh;
`;
const Container = styled.div``;

const ProfilePresenter = ({ handleScroll, isAuthenticated, profile }) => {
  //   if (!isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }
  return (
    <Main>
      <Container>
        <MyProfile handleScroll={handleScroll} profile={profile}></MyProfile>
      </Container>
    </Main>
  );
};

export default ProfilePresenter;
