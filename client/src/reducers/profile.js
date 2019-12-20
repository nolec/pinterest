import {
  GET_PROFILE,
  PROFILE_ERROR,
  PROFILE_LOADED,
  GET_PROFILES
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case PROFILE_LOADED:
      return { ...state, profile: payload, loading: false };
    case GET_PROFILES:
      return { ...state, profiles: payload, loading: false };
    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false, profile: null };
    default:
      return state;
  }
};
