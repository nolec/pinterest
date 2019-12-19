import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: #2f2f2f;
  padding-bottom: 50px;
  padding-top: 50px;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const ItemBox = styled.div`
  width: 33.3333333%;
`;
const FooterTitle = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    font-size: 24px;
    color: #fff;
    padding: 10px;
  }
`;
export default () => {
  return (
    <Footer>
      <Container>
        <Wrapper>
          <ItemBox>
            <FooterTitle>
              <h3>MY PROJECT</h3>
            </FooterTitle>
          </ItemBox>
          <ItemBox>
            <FooterTitle>
              <h3>MY PROJECT</h3>
            </FooterTitle>
          </ItemBox>
          <ItemBox>
            <FooterTitle>
              <h3>MY PROJECT</h3>
            </FooterTitle>
          </ItemBox>
        </Wrapper>
      </Container>
    </Footer>
  );
};
