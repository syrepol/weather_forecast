import { actionNames } from './actionNames';

export const a_storeWeatherData = (city, data) => ({
  type: actionNames.STORE_WEATHER_DATA,
  city,
  data
});

