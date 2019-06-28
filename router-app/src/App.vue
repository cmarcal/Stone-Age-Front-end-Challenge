<template>
  <div id="app" :class="theme">
    <div class="containerHeader" >
      <nav class="containerLink">
        <router-link :to="{ name: 'ContainerHeros'}" class="fromLeft">All Super Heros</router-link>
        <router-link :to="{ name: 'ContainerSearch'}" class="fromLeft">Find by Name</router-link>
        <button @click="triggy">{{textTheme}} <i class="fas " :class="iconTheme"></i></button>
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
  data () {
    return {
      theme: 'dark',
      textTheme: 'Night',
      iconTheme: 'fa-moon'
    }
  },
  methods: {
    triggy () {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          this.textTheme = 'Night'
          this.iconTheme = 'fa-moon'
          break
        case 'dark':
          this.theme = 'light'
          this.textTheme = 'Day'
          this.iconTheme = 'fa-sun'
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
html {
  height: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  height: 100%;
}
button {
  background: transparent;
  //color: white;
  padding: 5px 25px;
  border: 0;
  cursor: pointer;
  border-radius: 18px;
  border: 1px solid;
}
button:focus {outline:0;}

.light {
  background: #eee;
  color: #2a3542;
  button {
    color:#2a3542;
    border-color: #2a3542;
  }
   a {
    color: #2a3542;
    &:after {
        border-color: #2a3542;
      }
  }
  .containerBox {
    background-color: #eee;
  }
  .boxInformation {
    background-color: #d4d4d4cc;
  }
  .modal {
    background-color: #fff
  }
}
.dark {
  background: #2a3542;
  color: white;
  button {
    color:white;
    border-color: white;
  }
    a {
      color: white;
      &:after {
        border-color: white;
      }
    }
    .containerBox {
      background-color: #2a3542;
    }
    .boxInformation {
      background-color: #3a3a3acc;
    }
    .modal {
      background-color: #343a40;
    }
}

#app {
   font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
.containerHeader {
  padding: 40px 20px;
  margin-bottom: 30px;
}
.containerLink {
  padding: 10px 30px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 700px) {
    padding: 10px 5px;
  }

  a {
    margin-right: 20px;
    &:after {
      display:block;
      content: '';
      border-bottom: solid 1px;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &.fromLeft:after{
      transform-origin: 100% 50%;
    }
    &.fromLeft:hover:after{ transform: scaleX(1); transform-origin:   0% 50%; }
  }
}
.containerLink a {
  text-decoration: none;
}
</style>
