/* eslint-disable default-case */
import {
  GET_SEARCHED_REPOSITORIES_ERROR,
  GET_SEARCHED_REPOSITORIES_REQUEST,
  GET_SEARCHED_REPOSITORIES_SUCCESS,
} from "./action";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

const searchedRepositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHED_REPOSITORIES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_SEARCHED_REPOSITORIES_SUCCESS: {
      const repos = action.payload.items;
      return { ...state, items: repos, isLoading: false };
    }
    case GET_SEARCHED_REPOSITORIES_ERROR: {
      return { ...state, error: action.error, isLoading: false };
    }
  }
  return state;
};

export default searchedRepositoriesReducer;
