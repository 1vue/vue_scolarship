<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from '@/components/login.vue'
import test from '@/components/test.vue'
import home from '@/components/home.vue'
export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
