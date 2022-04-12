import { SET_SEARCH_QUERY } from "./action";

export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
}
