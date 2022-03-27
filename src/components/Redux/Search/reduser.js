const initialState = { isLoading: false, error: null, items: [] };

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "GET_TOP_REPOSITORYES_REQUEST": {
      return { ...state, isLoading: true };
    }
    case "GET_TOP_REPOSITORYES_SUCCESS": {
      return { ...state, items: action.payload.items, isLoading: false };
    }
    case "GET_TOP_REPOSITORYES_ERROR": {
      return { ...state, error: action.error, isLoading: false };
    }
  }
  return state;
};

export default reducer;
