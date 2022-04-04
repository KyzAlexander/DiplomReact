import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { lazy, Suspense, useMemo } from "react";
import createStore from "./components/Redux/store";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";


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
      </BrowserRouter>
    </Provider>
  );
}
