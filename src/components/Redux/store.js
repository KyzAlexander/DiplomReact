import { composeWithDevTools } from "@redux-devtools/extension";
import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import topRepositoriesReducer from "./Search/topRepositoriesReducer";
import searchedRepositoriesReducer from "./searchedRepositories/searchedRepositoriesReducer";

function rootReducer() {
  return combineReducers({
    topRepositories: topRepositoriesReducer,
    searchedRepositories: searchedRepositoriesReducer,
  });
}

// для чего это ??
const composeEnhancers = composeWithDevTools({
  name: "Github",
});

export default function createStore() {
  return createReduxStore(
    rootReducer(),
    composeEnhancers(applyMiddleware(thunk))
  );
}
