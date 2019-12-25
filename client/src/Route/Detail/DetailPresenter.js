import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 100%;
`;

const Container = styled.div`
  padding-top: 65px;
  margin: auto;
`;
const Wrapper = styled.section``;
const DetailPresenter = () => {
  return (
    <Main>
      <Container>
        <Wrapper>Detail</Wrapper>
      </Container>
    </Main>
  );
};

export default DetailPresenter;
