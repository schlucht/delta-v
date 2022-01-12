<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <input type="file" @change="readFhx" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ReadFhx } from '../api/readFhx.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    readFhx(e) {
      if (e.target.files) {
        new ReadFhx(e.target.files);
      }
      
    }
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
