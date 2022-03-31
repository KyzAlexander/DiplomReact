import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Header/Header";
import { setSearchQuery } from "../../Redux/search/actionCreators";
import { getTopRepositories } from "../../Redux/topRepositories/thunk";
import SearchedRepositories from "./SearchedRepositories";
import TopRepositories from "./TopRepositories";

function Home() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state?.search);
  const isSearchQueryEmpty = searchQuery === "" || searchQuery === null;

  useEffect(() => {
    dispatch(setSearchQuery(""));
  }, [dispatch]);

  useEffect(() => {
    if (isSearchQueryEmpty) {
      dispatch(getTopRepositories());
    }
  }, [dispatch, isSearchQueryEmpty]);

  const handleSearchChange = useCallback(
    (query) => {
      dispatch(setSearchQuery(query));
    },
    [dispatch]
  );
  return (
    <>
      <Header onSearch={handleSearchChange} />
      <main className="home">
        <TopRepositories />
        <SearchedRepositories />
      </main>
    </>
  );
}

export default React.memo(Home);
