/* eslint-disable default-case */
import {
  GET_CONTRIBUTORS_ERROR,
  GET_CONTRIBUTORS_REQUEST,
  GET_CONTRIBUTORS_SUCCESS,
} from "./action";

const initialState = {
  isFetching: false,
  status: "success",
};

const contributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTRIBUTORS_REQUEST: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    }
    case GET_CONTRIBUTORS_SUCCESS: {
      return { ...state, isFetching: action.payload.isFetching };
    }
    case GET_CONTRIBUTORS_ERROR: {
      return { ...state, error: action.error };
    }
  }
  return state;
};

export default contributorsReducer;
