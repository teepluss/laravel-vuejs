<template>
  <div>
    <h1>Chat</h1>
    <p>
      <label>Name:</label>
      <input v-model="name" v-on:keyup.enter="changeName">
      <div>
        Press enter to change the name from
        <strong>{{ getUser.name }}</strong>
        <span v-if="(name && name != getUser.name)">to <strong>{{ name}}</strong></span>
      </div>
    </p>
    <p>
      <textarea v-model="text" v-on:keyup="addNewMessage" cols="100" rows="5"></textarea>
    </p>
    </div>
  </div>
</template>
<script>
import * as getters from '../vuex/modules/getters'
import * as actions from '../vuex/modules/actions'

export default {
  vuex: {
    getters: {
      getUser: getters.user.getUser,
      getMessage: getters.message.getMessage
    },
    actions: {
      changeUserName: actions.user.changeUserName,
      newMessage: actions.message.newMessage
    }
  },
  data() {
    return {
      name: '',
      text: ''
    }
  },
  created() {
    this.name = this.getUser.name
    this.text = this.getMessage.text
  },
  methods: {
    changeName(e) {
      if (this.name.trim()) {
        this.changeUserName(this.name)
      }
      this.name = ''
    },
    addNewMessage(e) {
      this.newMessage(this.text)
    }
  }
}
</script>
