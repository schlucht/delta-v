<template>
  <home-page />
  <p>{{myData()}}</p>
</template>

<script>
import HomePage from './pages/HomePage';
import { getData } from '@/services/fhxService'
export default {
  name: 'App',
  components: {
    HomePage
  },
  computed: {
    
      
  },
  methods: {
     myData() {
      return getData().then(resp => resp)
    }
  },
  
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
:root {
  --gray: #aaa;
  --light-gray: #ccc;
  --dark-gray: #777;
  --black: #333;
  --white: #fff;
  --red: rgb(214, 50, 9);
  --blue: rgb(31, 71, 202);
  --green: rgb(65, 189, 96);
}
.bg-light {
  background: var(--white);
  color: var(--black);
}
.bg-dark {
  background-color: var(--dark-gray);
  color: var(--white);
}


</style>
