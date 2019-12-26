import {
  POST_SUCCESS,
  POST_FAIL,
  GET_POSTS,
  UPLOAD_SUCCESS,
  SHOWING_THUMBNAIL,
  DETAIL_POST
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

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
export const createPost = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/post", formData);
    dispatch({
      type: POST_SUCCESS,
      payload: res.data
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const uploadFiles = files => async dispatch => {
  const uploadData = new FormData();
  const config = {
    header: { "content-type": "multipart/form-data" }
  };
  uploadData.append("file", files[0]);
  console.log(uploadData, files);

  try {
    let variable = {
      filePath: "",
      fileName: "",
      thumbsFilePath: "",
      fileDuration: ""
    };
    const res = await axios.post("/api/post/uploadfiles", uploadData, config);
    variable = {
      filePath: res.data.filePath,
      fileName: res.data.fileName
    };
    dispatch({
      type: UPLOAD_SUCCESS,
      payload: res.data
    });
    const res2 = await axios.post("/api/post/thumbnail", variable);
    variable = {
      fileDuration: res2.data.fileDuration,
      thumbsFilePath: res2.data.thumbsFilePath
    };
    console.log(res2);
    dispatch({
      type: SHOWING_THUMBNAIL,
      payload: res2.data
    });
  } catch (error) {
    const errors = error.response.data.msg;
    console.log(errors);
  }
};
export const detailPost = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/post/${id}`);
    console.log(res);
    dispatch({
      type: DETAIL_POST,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: POST_FAIL,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
    history.push("/");
  }
};
