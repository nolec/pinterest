import React, { useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { detailPost } from "../../actions/post";

const DetailContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);
  console.log(match, history);

  useEffect(() => {
    dispatch(detailPost(match.params.id, history));
  }, []);

  return <DetailPresenter post={post.post}></DetailPresenter>;
};

export default DetailContainer;
