import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  PROFILE_LOADED,
  GET_PROFILES
} from "./types";
import { setAlert } from "./alert";

export const loadProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: PROFILE_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error
    });
  }
};
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/");
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR
    });
  }
};

export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/profile/cu", formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(
      setAlert(
        edit ? "프로필이 업데이트 되었습니다." : "프로필이 생성되었습니다.",
        "success"
      )
    );
    history.push("/");
  } catch (error) {
    const errors = error.response.data.msg;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    console.log(error.response);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
