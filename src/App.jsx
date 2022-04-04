import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { lazy, Suspense, useMemo } from "react";
import Pagination from "./components/Paginations/Pagination";
import RepositoryCard from "./components/RepositoryCard/RepositoryCard";

import Header from "./components/Header/Header";
import RepositoryList from "./components/RepositoryList/RepositoryList";
import createStore from "./components/Redux/store";
import TopRepo from "./components/Redux/topRepositories/Top10Repositoryes";
import TopRepositories from "./components/pages/Home/TopRepositories";
import SearchedRepositories from "./components/pages/Home/SearchedRepositories";
import Home from "./components/pages/Home/Home";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import DetailedRepository from "./components/pages/DetailedRepository/DetailedRepository";

export default function App() {
  const store = useMemo(() => createStore(), []);
  const Home = lazy(() => import("./components/pages/Home/Home")); // lazy позволяет отображать динамический импорт как обычный компонент
  const DetailedRepository = lazy(() =>
    import("./components/pages/DetailedRepository/DetailedRepository")
  );
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/repository/:ownerName/:repositoryName"
              component={DetailedRepository}
            />
          </Switch>
        </Suspense>
        {/* <Pagination /> */}
        {/* <DetailedRepository /> */}
        {/* <Home /> */}
        {/* <Header /> */}
        {/* <TopRepositories /> */}
        {/* <SearchedRepositories /> */}
        {/* <RepositoryList /> */}
        {/* <TopRepo /> */}
        {/* <Pagination /> */}
      </BrowserRouter>
    </Provider>
  );
}
