import {
  GET_TOP_REPOSITORYES_REQUEST,
  GET_TOP_REPOSITORYES_SUCCESS,
  GET_TOP_REPOSITORYES_ERROR,
} from "./actions";

export const getTopRepositoryesRequest = (limit) => {
  return {
    type: GET_TOP_REPOSITORYES_REQUEST,
    payload: limit,
  };
};

export const getTopRepositoryesSuccess = (payload) => {
  return {
    type: GET_TOP_REPOSITORYES_SUCCESS,
    payload: payload,
  };
};

export const getTopRepositoryesError = (error) => {
  return {
    type: GET_TOP_REPOSITORYES_ERROR,
    error: error,
  };
};
