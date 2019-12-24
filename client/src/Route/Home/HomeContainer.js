import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useSelector, useDispatch } from "react-redux";
import { loadPost } from "../../actions/post";

const HomeConatiner = ({ location }) => {
  // const getTime = () => {
  //   const date = new Date();
  //   const minutes = date.getMinutes();
  //   const hours = date.getHours();
  //   const seconds = date.getSeconds();
  //   const now = `${hours < 10 ? `0${hours}` : hours}:${
  //     minutes < 10 ? `0${minutes}` : minutes
  //   }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //   return now;
  // };
  // let [time, setTime] = useState(getTime());

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setTime(getTime());
  //   }, 1000);
  // }, []);
  //-----------------------------시간
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);
  useEffect(() => {
    dispatch(loadPost());
  }, []);
  return <HomePresenter location={location} posts={posts}></HomePresenter>;
};

export default HomeConatiner;
