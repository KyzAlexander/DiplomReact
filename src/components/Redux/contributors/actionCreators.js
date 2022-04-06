import {
  GET_CONTRIBUTORS_REQUEST,
  GET_CONTRIBUTORS_ERROR
} from "./actions";

export const getContributorsRequest = () => {
  return {
    type: GET_CONTRIBUTORS_REQUEST,
    payload: ,
  };
};

// export const getTopRepositoryesSuccess = (payload) => {
//   return {
//     type: GET_TOP_REPOSITORYES_SUCCESS,
//     payload: payload,
//   };
// };

export const getContributorsError = (error) => {
  return {
    type: GET_CONTRIBUTORS_ERROR,
    error: error,
  };
};
