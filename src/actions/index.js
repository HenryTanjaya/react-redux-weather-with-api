import axios from 'axios';

const API_KEY = 'd6c16ad887e739b1caaecbdb3bddaa43';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
  const url =`${ROOT_URL}&q=${city},id`;
  const request = axios.get(url);

  console.log('request',request)

  return {
    type:FETCH_WEATHER,
    payload:request
  }
}
