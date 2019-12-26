import React from "react";
import styled from "styled-components";

const Main = styled.div``;

const Container = styled.div``;

const SectionFirst = styled.section``;

const Div = styled.div`
  display: flex;
`;
const LeftBox = styled.div``;
const RightBox = styled.div``;
const ImgBox = styled.div``;

const DetailBox = ({ children }) => {
  console.log(children);
  return (
    <Main>
      <Container>
        <SectionFirst>
          <Div>
            <LeftBox>
              <ImgBox>
                <img
                  src={`http://localhost:5000/${children &&
                    children.thumbnail}`}
                />
                <img
                  src={`http://localhost:5000/${children && children.filePath}`}
                />
                <video width="320" height="240" controls>
                  <source
                    src={`http://localhost:5000/${children &&
                      children.filePath}`}
                  />
                  Your browser does not support the video tag.
                </video>
              </ImgBox>
            </LeftBox>
            <RightBox></RightBox>
          </Div>
        </SectionFirst>
      </Container>
    </Main>
  );
};

export default DetailBox;
