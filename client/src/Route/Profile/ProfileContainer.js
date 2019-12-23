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
      return setTop("0px");
    }
    setTop("-50px");
  };
  const handleScroll = () => {
    changeTop();
    return top;
  };
  useEffect(() => {
    dispatch(loadProfile());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ProfilePresenter
      handleScroll={handleScroll}
      isAuthenticated={auth.isAuthenticated}
      profile={profile.profile}
    ></ProfilePresenter>
  );
};

export default ProfileContainer;
