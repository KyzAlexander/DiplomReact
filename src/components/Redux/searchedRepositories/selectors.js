import { createSelector } from "reselect";

export const selectSearchedRepositories = createSelector(
  (state) => state?.searchedRepositories?.items,
  (repos) => repos
);
export const selectSearchedRepositoriesLoading = createSelector(
  (state) => state?.searchedRepositories?.isLoading //возможно здесь еще нужно ,(loading) => loading но в редьюсере нет loading
);
