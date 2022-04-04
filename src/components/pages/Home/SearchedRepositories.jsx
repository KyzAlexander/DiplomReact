import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedRepositoriesPage } from "../../Redux/searchedRepositories/actionCreators";
import {
  selectSearchedRepositories,
  selectSearchedRepositoriesLoading,
  selectSearchedRepositoriesPaginationInfo,
} from "../../Redux/searchedRepositories/selectors";
import getRepositoriesBySearchQuery from "../../Redux/searchedRepositories/thunks";
import RepositoryList from "../../RepositoryList/RepositoryList";
import Pagination from "../../Paginations/Pagination";
import "./index.css";

function SearchedRepositories() {
  const searchQuery = useSelector((state) => state?.search);
  const isSearchQueryEmpty = searchQuery === "" || searchQuery === null;
  const searchedRepos = useSelector(selectSearchedRepositories);
  const isSearchReposLoading = useSelector(selectSearchedRepositoriesLoading);

  const { total, limit, page } = useSelector(
    selectSearchedRepositoriesPaginationInfo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositoriesBySearchQuery(searchQuery, page));
  }, [dispatch, searchQuery, page]);

  const handlePageChange = useCallback(
    (pageToSet) => {
      dispatch(getSearchedRepositoriesPage(pageToSet));
    },
    [dispatch]
  );

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
        <h2 className="searchedRepos__title">
          Your search "{searchQuery}" found the following:
        </h2>
        <RepositoryList repositories={searchedRepos} />
        <Pagination
          total={total}
          limit={limit}
          selectedPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default React.memo(SearchedRepositories);
