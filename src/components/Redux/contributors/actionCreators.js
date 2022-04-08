import { GET_CONTRIBUTORS_SUCCESS } from "./action";
import { GET_CONTRIBUTORS_REQUEST, GET_CONTRIBUTORS_ERROR } from "./action";

export const getContributorsRequest = (isFetching) => {
  return {
    type: GET_CONTRIBUTORS_REQUEST,
    payload: isFetching,
  };
};

export const getContributorsSuccess = (isFetching) => {
  return {
    type: GET_CONTRIBUTORS_SUCCESS,
    payload: isFetching,
  };
};

export const getContributorsError = (error) => {
  return {
    type: GET_CONTRIBUTORS_ERROR,
    error: error,
  };
};
