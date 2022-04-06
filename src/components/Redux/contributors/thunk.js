import { getContributorsRequest, getContributorsError } from "./actionCreators";
// import { fetchMostRatedRepositories } from "../../../services/repositories";

const perPageLimit = 10;
export function getContributors() {
  return async (dispatch, getState) => {
    dispatch(getContributorsRequest(perPageLimit));

    try {
      const repositories = await fetchMostRatedRepositories({
        perPage: perPageLimit,
      });

      dispatch(getTopRepositoryesSuccess(repositories));
    } catch (error) {
      console.error(error);
      dispatch(getContributorsError(error));
    }
  };
}
