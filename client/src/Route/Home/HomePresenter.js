import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 100%;
`;

const Container = styled.div`
  padding-top: 60px;
  margin: auto;
`;
const Wrapper = styled.section``;
const ContentBox = styled.div`
  .images {
    position: relative;
    ::after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .image {
    padding: 10px;
    left: 0;
    top: 65px;
    float: right;
  }

  .image > img {
    width: 100%;
  }
  .image > span {
    position: absolute;
    color: white;
    bottom: 25px;
    right: 25px;
  }
`;
const HomePresenter = ({ posts, location }) => {
  const el = useRef(null);

  useEffect(() => {
    let images = document.querySelectorAll(".image");
    let width = document.querySelector("section").getBoundingClientRect().width;
    console.log(width);
    let imgStack = [0, 0, 0, 0];
    let colWidth;
    for (let i = 0; i < images.length; i++) {
      colWidth = Math.floor(width / imgStack.length);
      let minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
      let x = colWidth * minIndex;
      let y = imgStack[minIndex];
      imgStack[minIndex] += images[i].getBoundingClientRect().height + 20;
      images[i].style.width = `${colWidth}px`;
      images[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
      if (i === images.length - 1) {
        images[i].style.height = `${Math.max.apply(0, imgStack) + 20}px`;
      }
      console.log(images[i], minIndex, x, y, images[i].getBoundingClientRect());
    }
    if (location.pathname === "/") {
    }
  }, [posts]);
  return (
    <Main>
      <Container>
        <Wrapper>
          <ContentBox>
            <div className="images">
              {posts &&
                posts.map(post => (
                  <div key={post._id} className="image">
                    <img src={`http://localhost:5000/${post.thumbnail}`} />
                    <span>{post.title}</span>
                  </div>
                ))}
            </div>
          </ContentBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default HomePresenter;
