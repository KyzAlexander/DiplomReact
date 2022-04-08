import { createSelector } from "reselect";

export const selectContributors = createSelector(
  (state) => state?.contributors?.items,
  (repos) => repos
);
