import { POST_SUCCESS, POST_FAIL, GET_POSTS } from "../actions/types";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload, loading: false };
    case POST_SUCCESS:
      return { ...state, post: payload, loading: false };
    case POST_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
