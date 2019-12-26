import {
  POST_SUCCESS,
  POST_FAIL,
  GET_POSTS,
  UPLOAD_SUCCESS,
  SHOWING_THUMBNAIL,
  DETAIL_POST
} from "../actions/types";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: null,
  files: null,
  thumbnails: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload, loading: false, thumbnails: null };
    case UPLOAD_SUCCESS:
      return { ...state, loading: false, files: payload };
    case SHOWING_THUMBNAIL:
      return { ...state, loading: false, thumbnails: payload };
    case POST_SUCCESS:
    case DETAIL_POST:
      return { ...state, post: payload, loading: false };
    case POST_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
