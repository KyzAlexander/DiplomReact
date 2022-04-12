import { composeWithDevTools } from "@redux-devtools/extension";
import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import topRepositoriesReducer from "./topRepositories/topRepositoriesReducer";
import searchedRepositoriesReducer from "./searchedRepositories/searchedRepositoriesReducer";
import searchReduser from "./search/searchReduser";

function rootReducer() {
  return combineReducers({
    topRepositories: topRepositoriesReducer,
    searchedRepositories: searchedRepositoriesReducer,
    search: searchReduser,
  });
}

const composeEnhancers = composeWithDevTools({
  name: "Github",
});

export default function createStore() {
  return createReduxStore(
    rootReducer(),
    composeEnhancers(applyMiddleware(thunk))
  );
}
