<template>
  <div id="app" :class="theme">
    <div class="containerHeader" >
      <nav class="containerLink">
        <button @click="triggy">Toggle Themes</button>
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
  name: 'App',
  data() {
    return {
      theme: 'dark'
    }
  },
  methods: {
    triggy () {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          break
        case 'dark':
          this.theme = 'light'
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss" scoped>

body {
  margin: 0;
  font-family: avenir;
  -webkit-font-smoothing: antialiased;
}
button { background: dodgerblue; color: white; padding: .5rem 2rem; border: 0; cursor: pointer; }
.light {
  background: #eee;
  color: #2a3542;
   a { 
    color: #2a3542;
  }
  
}
.dark {
  background: #2a3542;
  color: white;
  a { 
    color: white;
    
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
.containerHeader {
  padding: 40px 20px;
  margin-bottom: 20px;
}
.containerLink {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
}
.containerLink a {
  text-decoration: none;
}
</style>
