import React, { useEffect } from "react";
import styled from "styled-components";
import Masonry from "../../Components/layouts/Masonry";

const Main = styled.main`
  height: 100%;
`;

const Container = styled.div`
  padding-top: 65px;
  margin: auto;
`;
const Wrapper = styled.section``;
const ContentBox = styled.div``;
const HomePresenter = ({ auth, location }) => {
  if (auth && auth.loading) {
    return <div>loading...</div>;
  } else {
    return (
      <Main>
        <Container>
          <Wrapper>
            <ContentBox>
              <Masonry />
            </ContentBox>
          </Wrapper>
        </Container>
      </Main>
    );
  }
};

export default HomePresenter;
