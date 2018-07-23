<template>
  <div id="app">
    <img src="./assets/logo.png">
    <TablesOfData />
  </div>
</template>

<script>
import TablesOfData from './components/TablesOfData.vue'

export default {
  name: 'app',
  components: {
    TablesOfData
  }
}
</script>

<style>
img {
  height: auto;
  width: 80px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
