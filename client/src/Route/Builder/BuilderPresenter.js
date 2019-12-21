import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  background-color: #efefef;
`;
const Wrapper = styled.section`
  height: 100%;
`;
const BuilderBox = styled.div`
  width: 300px;
  padding-top: 20px;
  border-radius: 16px;
  background-color: #fff;
  margin: auto;
`;
const Left = styled.div``;
const ButtonBox = styled.div``;
const Right = styled.div``;
const Group = styled.div``;
const BuilderPresenter = () => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <BuilderBox>
            <Left>
              <Group>
                <input
                  type="file"
                  accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                />
              </Group>
              <ButtonBox>
                <button type="button">사이트에 저장</button>
              </ButtonBox>
            </Left>
            <Right>
              <Group>
                <input type="text" value="" placeholder="제목 추가" />
              </Group>
              <Group>승승승</Group>
              <Group>
                <textarea
                  placeholder="사람들에게 회원님의 포스트에 대해 설명해 보세요"
                  rows="1"
                />
              </Group>
            </Right>
          </BuilderBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default BuilderPresenter;
