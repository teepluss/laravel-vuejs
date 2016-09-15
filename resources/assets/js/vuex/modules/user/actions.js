import * as types from '../../mutation-types'

module.exports = {
  changeUserName: (store, name) => {
    store.dispatch(types.CHANGE_USER_NAME, name)
  }
}
