const initialState = {
  drinks: null,
  categories: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COCKTAILS':
      return {
        ...state,
        drinks: action.payload,
      };
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
