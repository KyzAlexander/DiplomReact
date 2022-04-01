import { fetchRepositoriesBySearchQuery } from "../../../services/repositories";
import {
  getSearchedRepositoriesError,
  getSearchedRepositoriesRequest,
  getSearchedRepositoriesSuccess,
} from "./actionCreators";

const pageLimit = 10;
export default function getRepositoriesBySearchQuery(searchQuery, page = 1) {
  return async (dispatch, getState) => {
    if (!searchQuery) {
      return;
    }
    dispatch(getSearchedRepositoriesRequest(page, pageLimit));
    try {
      const repositories = await fetchRepositoriesBySearchQuery({
        searchQuery,
        page,
      });
      dispatch(getSearchedRepositoriesSuccess(repositories));
    } catch (error) {
      console.error(error);
      dispatch(getSearchedRepositoriesError(error));
    }
  };
}
