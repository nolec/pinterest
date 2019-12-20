import React, { useState } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

const Main = styled.main`
  height: 100%;
`;

const Container = styled.div`
  padding-top: 60px;
  margin: auto;
`;
const Wrapper = styled.section``;
const ContentBox = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  .my-masonry-grid {
    display: flex;
    width: 80%;
    margin: auto;
  }
  /* Style your items */
  .my-masonry-grid_column {
    /* change div to reference your elements you put in <Masonry> */
    width: 300px;
    margin-bottom: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    > img {
      height: auto;
    }
  }
`;
const MasonryItem = styled.figure``;
const HomePresenter = ({ time }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <Main>
      <Container>
        <Wrapper>
          <ContentBox>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              <img src={require("../../assets/img/nolec.png")} />
              <img src={require("../../assets/img/test.png")} />
              <img src={require("../../assets/img/nolec.png")} />
              <img src={require("../../assets/img/test.png")} />
              <img src={require("../../assets/img/nolec.png")} />
              <img src={require("../../assets/img/test.png")} />
              <img src={require("../../assets/img/test.png")} />
            </Masonry>
          </ContentBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default HomePresenter;
