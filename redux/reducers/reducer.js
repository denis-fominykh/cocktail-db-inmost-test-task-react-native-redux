const initialState = {
  drinks: null,
  categories: null,
};

const addCocktailsData = (oldData, index, newData) => {
  if (index === -1 && newData[0].checked) {
    return [...oldData, ...newData];
  }
};

const addCocktails = (state, newItem) => {
  const { drinks } = state;

  if (!drinks) {
    return {
      ...state,
      drinks: newItem,
    };
  }

  const itemIndex = drinks.findIndex((item) => item.title === newItem[0].title);
  const newData = addCocktailsData(drinks, itemIndex, newItem);

  return {
    ...state,
    drinks: newData,
  };
};

const updateCategoriesData = (oldData, index, newData) => {
  return [...oldData.slice(0, index), newData, ...oldData.slice(index + 1)];
};

const updateCategories = (state, newItem) => {
  const { categories } = state;

  const itemIndex = categories.findIndex((item) => item.name === newItem.name);
  const newData = updateCategoriesData(categories, itemIndex, newItem);

  console.log('categories', newData);

  return {
    ...state,
    categories: newData,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'GET_COCKTAILS':
      return addCocktails(state, action.payload);
    case 'SET_CATEGORIES':
      return updateCategories(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
