import { SET_SEARCH_QUERY } from "./action";

const initialState = "";
export function searchReduser(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      return action.payload;
    }
  }
  return state;
}
