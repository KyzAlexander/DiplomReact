import {
  getContributorsRequest,
  getContributorsError,
  getContributorsSuccess,
} from "./actionCreators";
// import { fetchMostRatedRepositories } from "../../../services/repositories";

export function getContributors(сontributors) {
  const url = "https://api.github.com/repos/octocat/hello-world/contributors";
  return async (dispatch, getState) => {
    dispatch(getContributorsRequest());

    try {
      const сontributors = await fetch(url);

      // dispatch(getContributorsSuccess(сontributors));
    } catch (error) {
      console.error(error);
      // dispatch(getContributorsError(error));
    }
  };
}
