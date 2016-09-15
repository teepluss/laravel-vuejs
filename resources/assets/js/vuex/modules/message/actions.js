import * as types from '../../mutation-types'

module.exports = {
  newMessage: (store, text) => {
    store.dispatch(types.NEW_MESSAGE, text)
  }
}
