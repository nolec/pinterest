import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.main``;

const Container = styled.div`
  padding-top: 60px;
  margin: auto;
`;
const Wrapper = styled.section``;
const ContentBox = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;
const GridBox = styled.div`
  columns: 4;
`;
const GridItem = styled.div`
  width: 100%;
  margin: 0 0 20px;
  padding: 10px;
  overflow: hidden;
  break-inside: avoid;
  img {
    max-width: 100%;
  }
`;
const HomePresenter = ({ time }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <ContentBox>
            <GridBox>
              <GridItem>
                <img src={require("../../assets/img/test.png")} />
              </GridItem>
              <GridItem>
                <img src={require("../../assets/img/test.png")} />
              </GridItem>
              <GridItem>
                <img src={require("../../assets/img/test.png")} />
              </GridItem>
              <GridItem>
                <img src={require("../../assets/img/test.png")} />
              </GridItem>
            </GridBox>
          </ContentBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default HomePresenter;
