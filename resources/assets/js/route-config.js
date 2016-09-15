export function configRouter (router) {
  router.map({
    '*': {
      component: require('./components/NotFound.vue')
    },
    '/': {
      component: require('./components/Home.vue')
    },
    '/chat': {
      component: require('./components/Chat.vue')
    }
  })
}
