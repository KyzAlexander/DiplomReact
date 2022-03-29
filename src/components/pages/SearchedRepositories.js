import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchedRepositories,
  selectSearchedRepositoriesLoading,
} from "../Redux/searchedRepositories/selectors";
import getRepositoriesBySearchQuery from "../Redux/searchedRepositories/thunks";
import RepositoryList from "../RepositoryList/RepositoryList";

function SearchedRepositories() {
  const searchQuery = useSelector((state) => state?.search);
  const isSearchQueryEmpty = searchQuery === "" || searchQuery === null;
  const searchedRepos = useSelector(selectSearchedRepositories);
  const isSearchReposLoading = useSelector(selectSearchedRepositoriesLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepositoriesBySearchQuery(searchQuery));
  }, [dispatch, searchQuery]);
  const isSearchedReposVisible =
    !isSearchQueryEmpty && searchedRepos && !isSearchReposLoading;
  return (
    <div className="searchedRepos">
      {isSearchReposLoading && "Searching repositories..."}
      <div
        className={`homeSearchedRepos ${
          isSearchedReposVisible ? "visible" : "invisible"
        }`}
      >
        <h1 className="searchedRepos__title">
          Your search found "{searchQuery}" the following:
        </h1>
        <RepositoryList repositories={searchedRepos} />
      </div>
    </div>
  );
}

export default React.memo(SearchedRepositories);
