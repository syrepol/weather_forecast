import { api } from 'services/api/api';

import {
  a_storeWeatherData
} from 'redux/actions';

export const t_getWeatherData = (city, params) => (dispatch) => {
  api
    .getWeather(params)
    .then((res) => {
      dispatch(a_storeWeatherData(city, res.data));
    })
    .catch((err) => {
      alert('Failed to get data from API');
    });
};
