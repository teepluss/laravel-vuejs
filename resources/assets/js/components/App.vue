<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import store from '../vuex/store';

export default {
  components: {
    appHeader: require('./Header.vue'),
    appFooter: require('./Footer.vue')
  },
  store
}
</script>
