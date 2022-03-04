import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import layout from './layout';
import weather from './weather';


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      layout,
      weather
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
