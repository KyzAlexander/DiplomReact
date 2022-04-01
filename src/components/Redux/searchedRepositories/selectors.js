import { createSelector } from "reselect";

export const selectSearchedRepositories = createSelector(
  (state) => state?.searchedRepositories?.items,
  (repos) => repos
);
export const selectSearchedRepositoriesLoading = createSelector(
  (state) => state?.searchedRepositories?.isLoading,
  (loading) => loading
);
export const selectSearchedRepositoriesPaginationInfo = createSelector(
  (state) => {
    return {
      limit: state?.searchedRepositories?.limit,
      total: state?.searchedRepositories?.total,
      page: state?.searchedRepositories?.page,
    };
  },
  (pagination) => pagination
);
