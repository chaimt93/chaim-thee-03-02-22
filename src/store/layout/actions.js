export async function some_action({state, commit, dispatch}) {
  commit('openIsLoading', true);

  commit('closeIsLoading', false);
}

