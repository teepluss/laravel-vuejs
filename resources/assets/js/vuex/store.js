import user from './modules/user/store'
import createLogger from 'vuex/logger'
import { state, mutations } from './modules'

Vue.config.debug = true
const debug = Vue.config.debug

export default new Vuex.Store({
  state,
  mutations
})
