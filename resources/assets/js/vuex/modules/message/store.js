import { NEW_MESSAGE } from '../../mutation-types'

export const state = {
  message: {
    text: 'What do you want from me?'
  }
}

export const mutations = {
  [NEW_MESSAGE] (state, text) {
    state.message.text = text
  }
}
