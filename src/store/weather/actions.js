import {autocomplete_cities, get_current_city_weather, get_five_days_weather} from '../../services/weather/weatherApi'
import {handleError} from "src/services/handlers";

export async function get_cities_autocomplete({state, commit, dispatch}, inputText) {
  try {
    if (!inputText?.length) return
    const cities = await autocomplete_cities(inputText);
    commit('setCities', cities);
  } catch (e) {
    handleError(e)
  }
}

export async function get_city_weather({state, commit, dispatch}, city) {
  try {
    const {Key} = city
    const fiveDays = await get_five_days_weather(Key);
    const [current] = await get_current_city_weather(Key);
    commit('setCurrentCity', {fiveDays, current, city});
  } catch (e) {
    handleError(e)
  }
}

export async function get_default_city_weather({state, commit, dispatch}) {
  try {
    await dispatch('get_city_weather', state.default)
  } catch (e) {
    handleError(e)
  }
}


