import { composeWithDevTools } from "@redux-devtools/extension";
import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import topRepositoriesReducer from "./topRepositoriesReducer";

function rootReducer() {
  return combineReducers({
    topRepositories: topRepositoriesReducer,
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
