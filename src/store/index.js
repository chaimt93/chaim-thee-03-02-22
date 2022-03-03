import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import layout from './layout';


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      layout,
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
