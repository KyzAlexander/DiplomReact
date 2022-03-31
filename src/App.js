import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { useMemo } from "react";
import Pagination from "./components/Paginations/Pagination";
// import RepositoryCard from "./components/RepositoryCard/RepositoryCard";

import Header from "./components/Header/Header.js";
import RepositoryList from "./components/RepositoryList/RepositoryList.js";
import createStore from "./components/Redux/store";
import TopRepo from "./components/Redux/topRepositories/Top10Repositoryes";
import TopRepositories from "./components/pages/TopRepositories";
import SearchedRepositories from "./components/pages/SearchedRepositories";
import Home from "./components/pages/Home";

export default function App() {
  const store = useMemo(() => createStore(), []);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Home />
        {/* <Header /> */}
        {/* <TopRepositories /> */}
        {/* <SearchedRepositories /> */}
        {/* <RepositoryList /> */}
        {/* <TopRepo /> */}
        {/* <Pagination /> */}
      </Provider>
    </BrowserRouter>
  );
}

// function App() {
//   // const store = useMemo(() => {
//   //   return createAplicationStore();
//   // }, []);
//   return (
//     // <Provider store={store}>
//     <BrowserRouter>
//       <Header />
//       <RepositoryList />
//       <div>
//         <Pagination />
//         <Link to={"/RepositoryPage"}> Ссыла на репо</Link>
//       </div>
//       <Switch>
//         <Route path='/Repos/:id' component={RepositoryCard}></Route>
//         <Route path='/' exact={true}>
//           {/* <HomePage />
//             <TopRepo /> */}
//         </Route>
//         <Route path='/Repos/pages/:page' component={RepositoryCard}></Route>

//         {/* <Route path="/RepositoryPage">
//           <RepositoryPage />
//         </Route> */}
//       </Switch>
//     </BrowserRouter>
//     // </Provider>
//   );
// }
