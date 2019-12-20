import React, { useState } from "react";
const handleScroll = () => {
  const [animation, setAnimation] = useState({ top: "-50px" });
  window.addEventListener("scroll", () => {
    setAnimation({
      top: "0px"
    });
  });
  window.addEventListener("scroll", () => {
    setAnimation({
      top: "-50px"
    });
  });
  return animation;
};

export default handleScroll;
