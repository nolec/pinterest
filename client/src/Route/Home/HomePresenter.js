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
const Mansory = styled.div`
  columns: 4;
  column-gap: 20px;
`;
const MansoryItem = styled.figure`
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  break-inside: avoid;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const HomePresenter = ({ time }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <ContentBox>
            <Mansory className="grid_box">
              <MansoryItem>
                <img src={require("../../assets/img/test.png")} />
              </MansoryItem>
              <MansoryItem>
                <img src={require("../../assets/img/test.png")} />
              </MansoryItem>
              <MansoryItem>
                <img src={require("../../assets/img/test.png")} />
              </MansoryItem>
              <MansoryItem>
                <img src={require("../../assets/img/test.png")} />
              </MansoryItem>
              <MansoryItem>
                <img src={require("../../assets/img/test.png")} />
              </MansoryItem>
              <MansoryItem>
                <img src={require("../../assets/img/test.png")} />
              </MansoryItem>
            </Mansory>
          </ContentBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default HomePresenter;
