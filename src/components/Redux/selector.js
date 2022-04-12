import { createSelector } from "reselect";

export const selectRepositoriesByOwnerAndName = createSelector(
  (state) => [
    ...(state?.searchedRepositories?.items ?? []),
    ...(state?.topRepositories?.items ?? []),
  ],
  (repositories, ownerName) => ownerName,
  (repositories, ownerName, repositoryName) => repositoryName,
  (repositories, ownerName, repositoryName) => {
    return repositories?.find(
      (repository) =>
        repository.name === repositoryName &&
        repository.owner.login === ownerName
    );
  }
);
