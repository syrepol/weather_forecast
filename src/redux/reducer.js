import { combineReducers } from "redux";
import { weather } from './reducers/weather';

export const reducer = combineReducers({
  weather
});

