import "./App.css";
// import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import Pagination from "./components/Paginations/Pagination";
// import { useMemo } from "react";
// import RepositoryCard from "./components/RepositoryCard/RepositoryCard";
// import Header from "./components/header/header";
// import RepositoryList from "./components/RepositoryList/RepositoryList";

function App() {
  // тот который был до добавления Pagination
  return <div className='App'></div>;
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

export default App;
