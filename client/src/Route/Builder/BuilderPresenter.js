import React from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
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
const BuilderPresenter = ({
  onDrop,
  handleChangeTitle,
  handleChangeDecsription,
  handleSubmit
}) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <BuilderBox>
            <Left>
              <Group>
                <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      style={{
                        width: "300px",
                        height: "240px",
                        border: "1px solid lightgray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                      {...getRootProps()}
                    >
                      {console.log(getRootProps(), getInputProps())}
                      <input {...getInputProps()} />
                    </div>
                  )}
                </Dropzone>
              </Group>
              <ButtonBox>
                <button type="button" onClick={handleSubmit}>
                  사이트에 저장
                </button>
              </ButtonBox>
            </Left>
            <Right>
              <Group>
                <input
                  type="text"
                  name="title"
                  placeholder="제목 추가"
                  onChange={handleChangeTitle}
                />
              </Group>
              <Group></Group>
              <Group>
                <textarea
                  placeholder="사람들에게 회원님의 포스트에 대해 설명해 보세요"
                  rows="1"
                  name="description"
                  onChange={handleChangeDecsription}
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
