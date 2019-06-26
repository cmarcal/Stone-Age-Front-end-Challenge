<template>
  <div id="app">
    <div class="container">
      <nav class="containerLink">
        <router-link :to="{ name: 'ContainerHeros'}">SuperHeros</router-link>
        <router-link :to="{ name: 'ContainerSearch'}">Find by Name</router-link>
      </nav>
      <h1>Welcome to the list of all heros</h1>
    </div>
    <transition name="moveInUp">
      <router-view/>
    </transition>
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
.containerLink {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
}
.containerLink a {
  color:#fff;
  text-decoration: none;
}
</style>
