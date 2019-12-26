import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadPost } from "../../actions/post";
import { Link } from "react-router-dom";
import Mas from "react-masonry-component";

const Div = styled.div`
  padding: 0 10px;
  overflow: hidden;
  img {
    width: 100%;
  }
  a {
    display: block;
    width: 100%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
  }
  span {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    padding: 5px;
    margin: 0 5px 5px 0;
    background: #fff;
    border-radius: 5px;
  }
  .grid-item {
    width: 25%;
    padding: 0 5px;
    margin-bottom: 10px;
  }
  .my-gallery-class {
  }
`;
const Tlink = styled(Link)`
  cursor: pointer;
`;
const Masonry = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);
  const masonryOptions = {
    transitionDuration: 1
  };
  useEffect(() => {
    const start = async () => {
      await dispatch(loadPost());
    };
    start();
  }, [post.loading]);
  return (
    <Div>
      <Mas
        className={"my-gallery-class"} // default ''
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {post.posts &&
          post.posts.map(post => (
            <div key={post._id} className="grid-item">
              <Tlink to={`/post/${post._id}`}>
                <img src={`http://localhost:5000/${post.thumbnail}`} />
                <span>{post.title}</span>
              </Tlink>
            </div>
          ))}
      </Mas>
    </Div>
  );
};

export default Masonry;
