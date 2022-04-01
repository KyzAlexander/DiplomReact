import {
  getTopRepositoryesRequest,
  getTopRepositoryesSuccess,
  getTopRepositoryesError,
} from "./actionCreators";
import { fetchMostRatedRepositories } from "../../../services/repositories";

const perPageLimit = 10;
export function getTopRepositories() {
  return async (dispatch, getState) => {
    dispatch(getTopRepositoryesRequest(perPageLimit));

    try {
      const repositories = await fetchMostRatedRepositories({
        perPage: perPageLimit,
      });

      dispatch(getTopRepositoryesSuccess(repositories));
    } catch (error) {
      console.error(error);
      dispatch(getTopRepositoryesError(error));
    }
  };
}
