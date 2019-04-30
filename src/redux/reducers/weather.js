import { actionNames } from 'redux/actionNames';

const initialState = {};

export const weather = (state = initialState, action) => {
  switch (action.type) {

    case actionNames.STORE_WEATHER_DATA:
      return {
        ...state,
        [action.city]: action.data
      };

    default:
      return state;
  }
}
