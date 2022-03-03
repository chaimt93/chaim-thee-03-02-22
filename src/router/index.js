import {route, store} from 'quasar/wrappers'
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'

export default route(function ({store}) {
  const Router = createRouter({
    scrollBehavior: () => ({left: 0, top: 0}),
    routes,
    history: createWebHistory()
  })
  return Router
})


