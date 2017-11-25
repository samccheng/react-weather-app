import axios from 'axios'

const API_KEY = ''
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`


export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`

  const weather = axios.get(url)

  return {
    type: 'FETCH_WEATHER',
    payload: weather
  }
}
