import {autocomplete_cities, get_current_city_weather, get_five_days_weather} from '../../services/weather/weatherApi'
import {handleError} from "src/services/handlers";

export async function get_cities_autocomplete({state, commit, dispatch}, inputText) {
  try {
    const cities = JSON.parse(localStorage.getItem(inputText) || '[]')
    console.log(cities)
    // const cities = await autocomplete_cities(inputText);
    // localStorage.setItem(inputText,JSON.stringify(cities))
    commit('setCities', cities);
  } catch (e) {
    handleError(e)
  }
}

export async function get_city_weather({state, commit, dispatch}, city) {
  try {
    const {Key} = city
    const fiveDays = JSON.parse(localStorage.getItem(Key) || '{}');
    // const fiveDays = await get_five_days_weather(Key);
    // localStorage.setItem(Key,JSON.stringify(fiveDays))
    const current = JSON.parse(localStorage.getItem(`current-${Key}`) || '{}');
    // const [current] = await get_current_city_weather(Key);
    // localStorage.setItem(`current-${Key}`,JSON.stringify(current))
    commit('setCurrentCity', {fiveDays, current, city});
  } catch (e) {
    handleError(e)
  }
}

