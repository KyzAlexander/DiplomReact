import { fetchRepositoriesBySearchQuery } from "../../../services/repositories";
import {
  getSearchedRepositoriesError,
  getSearchedRepositoriesRequest,
  getSearchedRepositoriesSuccess,
} from "./actionCreators";

export default function getRepositoriesBySearchQuery(searchQuery) {
  return async (dispatch, getState) => {
    if (!searchQuery) {
      return;
    }
    dispatch(getSearchedRepositoriesRequest);
    try {
      const repositories = await fetchRepositoriesBySearchQuery({
        searchQuery,
      });
      dispatch(getSearchedRepositoriesSuccess(repositories));
    } catch (error) {
      console.error(error);
      dispatch(getSearchedRepositoriesError(error));
    }
  };
}
