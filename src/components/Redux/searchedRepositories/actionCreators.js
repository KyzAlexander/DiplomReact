import {
  GET_SEARCHED_REPOSITORIES_ERROR,
  GET_SEARCHED_REPOSITORIES_PAGE,
  GET_SEARCHED_REPOSITORIES_REQUEST,
  GET_SEARCHED_REPOSITORIES_SUCCESS,
} from "./action";

export function getSearchedRepositoriesRequest(page, limit) {
  return {
    type: GET_SEARCHED_REPOSITORIES_REQUEST,
    payload: { limit, page },
  };
}
export function getSearchedRepositoriesSuccess(repositories) {
  return {
    type: GET_SEARCHED_REPOSITORIES_SUCCESS,
    payload: repositories,
  };
}
export function getSearchedRepositoriesError(error) {
  return {
    type: GET_SEARCHED_REPOSITORIES_ERROR,
    error: error,
  };
}

export function getSearchedRepositoriesPage(page) {
  return {
    type: GET_SEARCHED_REPOSITORIES_PAGE,
    payload: page,
  };
}
