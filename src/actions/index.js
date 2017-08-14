import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// to keep our action types consistent between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// middleware: functions that take an action and depending on actions type/payload or other factors
  // the middleware can choose to let the action pass through, log it, stop it, or manipulate it before it reaches the reducer
  // gatekeepers

// Action Creator
  // will take care of fetching information from API
export function fetchWeather(city){

  const URL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(URL);

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}