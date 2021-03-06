import { createSelector } from "reselect";

export const selectTopRepositories = createSelector(
  (state) => state?.topRepositories?.items,
  (repos) => repos
);
export const selectTopRepositoriessLoading = createSelector(
  (state) => state?.topRepositories?.isLoading,
  (loading) => loading
);
