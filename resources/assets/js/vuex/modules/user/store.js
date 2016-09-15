import { CHANGE_USER_NAME, WHAT_DA_FUCK } from '../../mutation-types'

// Create an object to hold the initial state when
// the app starts up
export const state = {
  user: {
    name: 'Someone'
  }
}

// Create an object storing various mutations. We will write the mutation
export const mutations = {
  [CHANGE_USER_NAME] (state, name) {
    state.user.name = name
  }
}
