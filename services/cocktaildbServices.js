import axios from 'axios';
import { getCategories, getCocktails } from '../redux/actions';

const _apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';

const _transformCategoriesData = (data) => {
  return data.map((item, id) => {
    return {
      name: item.strCategory,
      checked: true,
      id,
    };
  });
};

const _transformCocktailsData = (data, value) => {
  return data.map((item) => {
    return {
      name: item.strDrink,
      img: item.strDrinkThumb,
      id: item.idDrink,
      category: value,
      checked: true,
    };
  });
};

export const getItemsCategories = (param, key, value) => (dispatch) => {
  axios.get(`${_apiBase}/${param}.php?${key}=${value}`).then((response) => {
    if (response.status === 200) {
      dispatch(getCategories(_transformCategoriesData(response.data.drinks)));
    }
  });
};

export const getResourceItem = (param, key, value) => (dispatch) => {
  axios.get(`${_apiBase}/${param}.php?${key}=${value}`).then((response) => {
    if (response.status === 200) {
      dispatch(
        getCocktails(_transformCocktailsData(response.data.drinks, value)),
      );
    }
  });
};
