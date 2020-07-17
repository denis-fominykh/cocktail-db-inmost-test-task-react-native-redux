const initialState = {
  drinks: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COCKTAILS':
      return {
        ...state,
        drinks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
