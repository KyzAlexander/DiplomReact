import {
  getTopRepositoryesRequest,
  getTopRepositoryesSuccess,
  getTopRepositoryesError,
} from "./actionCreators";
import { fetchMostRatedRepositories } from "../../../services/repositories";

export function getTopRepositories() {
  return async (dispatch, getState) => {
    dispatch(getTopRepositoryesRequest());

    try {
      const repositories = await fetchMostRatedRepositories(); // fetchMostRatedRepositories -берется из servises

      dispatch(getTopRepositoryesSuccess(repositories));
    } catch (error) {
      console.error(error);
      dispatch(getTopRepositoryesError(error));
    }
  };
}
