import React from "react";
import { useSelector } from "react-redux";
import {
  selectTopRepositories,
  selectTopRepositoriessLoading,
} from "../../Redux/topRepositories/selectors";
import RepositoryList from "../../RepositoryList/RepositoryList";

function TopRepositories() {
  const searchQuery = useSelector((state) => state?.search);
  const isSearchQueryEmpty = searchQuery === "" || searchQuery === null;
  const topRepos = useSelector(selectTopRepositories);
  const isTopReposLoading = useSelector(selectTopRepositoriessLoading);
  const isTopReposVisible =
    isSearchQueryEmpty && topRepos && !isTopReposLoading;

  return (
    <div className="topRepos">
      {isTopReposLoading && "Top repositories loading..."}
      <div
        className={`homeTopRepos ${
          isTopReposVisible ? "visible" : "invisible"
        }`}
      >
        <h1 className="homeTopRepos__title">
          Top {topRepos.length} repositories
        </h1>
        <RepositoryList repositories={topRepos} />
      </div>
    </div>
  );
}
export default React.memo(TopRepositories);
