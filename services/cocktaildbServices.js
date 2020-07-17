import axios from 'axios';
import { getCocktails } from '../redux/actions';

const _apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';

const getResourceItem = (param, key, value) => (dispatch) => {
  axios.get(`${_apiBase}/${param}.php?${key}=${value}`).then((response) => {
    if (response.status === 200) {
      dispatch(getCocktails(response.data));
    }
  });
};

export default getResourceItem;
