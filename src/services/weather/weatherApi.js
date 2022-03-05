import {endpoints} from './constants';
import {handleError} from "src/services/handlers";

export async function autocomplete_cities(text) {
  let url = endpoints.autocomplete(text);
  return await weatherFetch({url})
}

export async function get_current_city_weather(key) {
  let url = endpoints.current(key);
  return (await weatherFetch({url}))
}

export async function get_five_days_weather(key) {
  let url = endpoints.fiveDays(key);
  return await weatherFetch({url})
}

export async function weatherFetch({url}) {
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    return data
  } catch (e) {
    handleError(e)
  }
}
