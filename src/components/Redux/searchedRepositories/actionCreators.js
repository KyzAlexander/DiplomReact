import {
  GET_SEARCHED_REPOSITORIES_ERROR,
  GET_SEARCHED_REPOSITORIES_REQUEST,
  GET_SEARCHED_REPOSITORIES_SUCCESS,
} from "./action";

export function getSearchedRepositoriesRequest() {
  return {
    type: GET_SEARCHED_REPOSITORIES_REQUEST,
    payload: {},
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
