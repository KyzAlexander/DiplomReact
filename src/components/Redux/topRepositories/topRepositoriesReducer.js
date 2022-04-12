/* eslint-disable default-case */
import {
  GET_TOP_REPOSITORYES_ERROR,
  GET_TOP_REPOSITORYES_REQUEST,
  GET_TOP_REPOSITORYES_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  total: 0,
  limit: 0,
};

const topRepositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_REPOSITORYES_REQUEST: {
      return { ...state, isLoading: true, limit: action.payload };
    }
    case GET_TOP_REPOSITORYES_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
        isLoading: false,
        total: action.payload.total_count,
      };
    }
    case GET_TOP_REPOSITORYES_ERROR: {
      return { ...state, error: action.error, isLoading: false };
    }
  }
  return state;
};

export default topRepositoriesReducer;
