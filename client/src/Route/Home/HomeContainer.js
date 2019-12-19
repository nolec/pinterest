import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";

const HomeConatiner = () => {
  const getTime = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const now = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    return now;
  };
  let [time, setTime] = useState(getTime());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);
  //-----------------------------시간

  return <HomePresenter time={time}></HomePresenter>;
};

export default HomeConatiner;
