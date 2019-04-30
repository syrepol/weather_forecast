import axios from 'axios';
import qs from 'query-string';
import { endpoints } from './endpoints';

// configure axios
const http = axios.create();

// can be used to define actual url
// in development we use package.json => proxy
const { REACT_APP_MODE } = process.env;

export const api = {
  getWeather(passedQueryParams) {
    const queryParams = {
      ...passedQueryParams,
      key: '0010860da292439b92f74118193004'
    }
    return http.get(`${endpoints.weather}?${qs.stringify(queryParams)}`)
  }
};

