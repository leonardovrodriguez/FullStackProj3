<template>
  <div id="app">
  <!----<img alt="Vue logo" src="./assets/logo.png">-->
  <PostComponent v-cloak/>
  </div>
</template>
 
<script>
import PostComponent from './components/PostComponent.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.css'

export default {
  name: 'App',
  components: {
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px !important;
  padding: 0px !important;
  top: 0px !important;
}
</style>
