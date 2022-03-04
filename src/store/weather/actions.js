export async function getCities({state, commit, dispatch},inputText) {
  commit('layout/openIsLoading', true, {root: true});
  console.log(inputText)
  commit('layout/closeIsLoading', true, {root: true});
}

export async function get_city_weather({state, commit, dispatch},city) {
  const {code} = city
  commit('layout/openIsLoading', true, {root: true});
  console.log(city)
  commit('layout/closeIsLoading', true, {root: true});
}

