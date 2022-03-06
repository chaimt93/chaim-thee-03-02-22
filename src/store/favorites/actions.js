import {handleError, notify_success} from "src/services/handlers";

export async function remove_from_favorites({state, commit, dispatch}, city) {
  try {
    const favorites = state?.favorites ? [...state.favorites] : [];
    const i = favorites.findIndex(c => c.city.Key === city.city.Key)
    if (i > -1) favorites.splice(i, 1)
    commit('setFavorites', favorites);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
    notify_success('removed successfully');
  } catch (e) {
    handleError(e)
  }
}

export async function add_to_favorites({state, commit, dispatch}, city) {
  try {
    const favorites = state?.favorites ? [...state.favorites] : [];
    const i = favorites.findIndex(c => c.city.Key === city.city.Key)
    if (i < 0) favorites.push(city);
    commit('setFavorites', favorites);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
    notify_success('added successfully')
  } catch (e) {
    handleError(e)
  }
}

export async function get_favorites_from_storage({state, commit, dispatch},) {
  try {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    commit('setFavorites', favorites);
  } catch (e) {
    handleError(e)
  }
}

