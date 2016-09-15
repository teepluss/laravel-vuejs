
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

import { configRouter } from './route-config'

const router = new VueRouter({
  history: false,
  saveScrollPosition: true
});

// configure router
configRouter(router)

const App = Vue.extend(require('./components/App.vue'))

// initialize the router and mount to #app
router.start(App, '#app')

// just for debugging
window.router = router
