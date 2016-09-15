import * as user from './user/store'
import * as message from './message/store'

export const state = _.merge(
  user.state,
  message.state
)

export const mutations = _.merge(
  user.mutations,
  message.mutations
)
