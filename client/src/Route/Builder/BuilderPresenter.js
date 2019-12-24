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
  margin-top: 50px;
`;
const BuilderBox = styled.div`
  max-width: 800px;
  padding: 20px;
  border-radius: 16px;
  background-color: #fff;
  margin: auto;
  display: flex;
`;
const Left = styled.div`
  flex-basis: 50%;
  padding: 10px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  button {
    width: 80%;
    height: 30px;
    border: 1px solid;
    color: #999999;
    background-color: #fff;
    border-radius: 10px;
  }
`;
const Group = styled.div`
  width: 100%;
  input[name="title"] {
    width: 100%;
    height: 30px;
    border: 1px solid;
    border-radius: 10px;
    padding: 0 10px;
  }
  textarea {
    width: 100%;
    height: 70px;
    border-radius: 10px;
    border: 1px solid;
    padding: 10px 10px;
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  padding: 10px;
  ${Group} {
    :not(:first-child) {
      margin-top: 10px;
    }
  }
`;
const BuilderPresenter = ({
  user,
  thumb,
  onDrop,
  handleChange,
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
                        width: "100%",
                        height: "240px",
                        border: "1px solid lightgray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        overflow: "hidden"
                      }}
                      {...getRootProps()}
                    >
                      {console.log(getRootProps(), getInputProps())}
                      <input {...getInputProps()} />
                      {thumb !== null ? (
                        <div style={{ overflow: "hidden", width: "100%" }}>
                          <img
                            style={{ width: "100%" }}
                            src={`http://localhost:5000/${thumb.thumbsFilePath}`}
                            alt="haha"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            style={{
                              all: "unset",
                              fontSize: "100px",
                              display: "flex",
                              alignItems: "center"
                            }}
                          >
                            +
                          </button>
                        </div>
                      )}
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
                  onChange={handleChange}
                />
              </Group>
              <Group></Group>
              <Group>
                <textarea
                  placeholder="사람들에게 회원님의 포스트에 대해 설명해 보세요"
                  rows="1"
                  name="description"
                  onChange={handleChange}
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
