import React, { useEffect, useState } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useDispatch, useSelector } from "react-redux";
import { loadProfile } from "../../actions/profile";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile);

  const [top, setTop] = useState("-50px");
  const changeTop = () => {
    if (window.scrollY > 30) {
      setTop("0px");
    } else {
      setTop("-50px");
    }
  };
  const handleScroll = () => {
    window.addEventListener("scroll", changeTop);
    return top;
  };
  useEffect(() => {
    dispatch(loadProfile());
    return () => window.removeEventListener("scroll", changeTop);
  }, [handleScroll]);
  return (
    <ProfilePresenter
      handleScroll={handleScroll}
      isAuthenticated={auth.isAuthenticated}
      profile={profile.profile}
    ></ProfilePresenter>
  );
};

export default ProfileContainer;
