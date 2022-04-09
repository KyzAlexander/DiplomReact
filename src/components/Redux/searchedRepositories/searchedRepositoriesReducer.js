import {
  GET_SEARCHED_REPOSITORIES_ERROR,
  GET_SEARCHED_REPOSITORIES_PAGE,
  GET_SEARCHED_REPOSITORIES_REQUEST,
  GET_SEARCHED_REPOSITORIES_SUCCESS,
} from "./action";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  total: 0,
  limit: 1,
  page: 1,
};

const searchedRepositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHED_REPOSITORIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        limit: action.payload.limit,
        page: action.payload.page,
      };
    }
    case GET_SEARCHED_REPOSITORIES_SUCCESS: {
      const repos = action.payload.items;
      const total = action.payload.total_count;
      return { ...state, items: repos, isLoading: false, total };
    }
    case GET_SEARCHED_REPOSITORIES_ERROR: {
      return { ...state, error: action.error, isLoading: false };
    }
    case GET_SEARCHED_REPOSITORIES_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
  }
  return state;
};

export default searchedRepositoriesReducer;
