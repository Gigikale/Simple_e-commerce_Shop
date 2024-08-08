<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
export default {
  name: "App",
  ProductList
};
</script>


<style>
/* General styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
  color: #2c3e50;
}

#app {
  text-align: center;
  margin-top: 60px;
  position: relative;
}
</style>
