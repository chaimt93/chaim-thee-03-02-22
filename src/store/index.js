import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import layout from './layout';
import weather from './weather';
import favorites from './favorites';


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      layout,
      weather,
      favorites,
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
