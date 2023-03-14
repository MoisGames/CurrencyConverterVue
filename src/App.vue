<template>
<convertCurrency/>

</template>

<script>
import convertCurrency from './components/convertCurrency.vue'

export default {
  name: 'App',
  components: {
    convertCurrency
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
  margin-top: 60px;
}
body {
  background-color: rgb(161, 21, 161);
  background: url("../src/assets/background.jpg") repeat;
  background-size: cover;
}
</style>
