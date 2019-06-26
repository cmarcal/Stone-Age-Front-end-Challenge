<template>
  <div id="app">
    <div class="container">
      <h1>Bem vindos a listagem de todos os herois</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  background-color: #2a3542;
  padding: 40px 20px;
  color: #fff;
  margin-bottom: 20px;
}
</style>
