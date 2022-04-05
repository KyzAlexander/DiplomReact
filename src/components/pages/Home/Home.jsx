import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../../Header/Header";
import { setSearchQuery } from "../../Redux/search/actionCreators";
import { getSearchedRepositoriesPage } from "../../Redux/searchedRepositories/actionCreators";
import { getTopRepositories } from "../../Redux/topRepositories/thunk";
import SearchedRepositories from "./SearchedRepositories";
import TopRepositories from "./TopRepositories";

function Home() {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state?.search);
  const isSearchQueryEmpty = searchQuery === "" || searchQuery === null;

  useEffect(()=> {
    const searchParams = new URLSearchParams(location.search)
    const searchFromParams = searchParams.get('search')
    const pageFromParams = searchParams.get('page')
    const hasFilledSerchParams = Boolean(searchFromParams) && Boolean(pageFromParams)

    if(hasFilledSerchParams) {
      const pageFromSearch = parseInt(pageFromParams, 10) // parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
    dispatch(getSearchedRepositoriesPage(pageFromSearch))
    dispatch(setSearchQuery(searchFromParams))
    }
  }, []) 

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
      <Header search={searchQuery} onSearch={handleSearchChange} />
      <main className="home">
        <TopRepositories />
        <SearchedRepositories />
      </main>
    </>
  );
}

export default React.memo(Home);
