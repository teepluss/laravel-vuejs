<template>
  <div>
    <h1>Welcome {{ getUser.name }}</h1>
    <p>{{ getMessage.text }}</p>
  </div>
</template>
<script>
import * as getters from '../vuex/modules/getters'
export default {
  vuex: {
    getters: {
      getUser: getters.user.getUser,
      getMessage: getters.message.getMessage
    }
  }
}
</script>
