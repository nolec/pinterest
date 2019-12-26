import React from "react";
import styled from "styled-components";
import DetailBox from "../../Components/layouts/PostDetail/DetailBox";

const Main = styled.main`
  height: 100%;
`;

const Container = styled.div`
  padding-top: 65px;
  margin: auto;
`;
const Wrapper = styled.section``;
const DetailPresenter = ({ post }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <DetailBox children={post}></DetailBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default DetailPresenter;
