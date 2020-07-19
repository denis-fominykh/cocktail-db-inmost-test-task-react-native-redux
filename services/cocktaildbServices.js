import axios from 'axios';
import { getCategories, getCocktails } from '../redux/actions';

const _apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';

export const getItemsCategories = (param, key, value) => (dispatch) => {
  axios.get(`${_apiBase}/${param}.php?${key}=${value}`).then((response) => {
    if (response.status === 200) {
      dispatch(getCategories(response.data.drinks));
    }
  });
};

export const getResourceItem = (param, key, value) => (dispatch) => {
  axios.get(`${_apiBase}/${param}.php?${key}=${value}`).then((response) => {
    if (response.status === 200) {
      dispatch(getCocktails(response.data.drinks));
    }
  });
};
