import { POST_SUCCESS, POST_FAIL, GET_POSTS } from "./types";
import axios from "axios";

export const loadPost = () => async dispatch => {
  try {
    const res = await axios.get("/api/post/all");
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: POST_FAIL,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
export const createPost = (title, text, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = { title, text };
    const res = await axios.post("/api/post/", config, body);
    dispatch({
      type: POST_SUCCESS,
      payload: res.data
    });
    history.push("/");
  } catch (error) {
    dispatch({
      type: POST_FAIL,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
