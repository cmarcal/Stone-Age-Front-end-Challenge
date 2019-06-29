<template>
  <div id="app" :class="theme">
    <nav class="containerLink">
      <div class="navLinks">
        <img src="./assets/logo.png">
      </div>
      <div class="navLinks">
        <router-link :to="{ name: 'ContainerHeros'}" class="fromLeft">All super heros</router-link>
        <router-link :to="{ name: 'ContainerSearch'}" class="fromLeft">Find by name</router-link>
        <router-link :to="{ name: 'ContainerFavorite'}" class="fromLeft">List favorite</router-link>
        <button @click="triggy">{{textTheme}} <i class="fas " :class="iconTheme"></i></button>
      </div>
    </nav>
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
      theme: 'light',
      textTheme: 'Day',
      iconTheme: 'fa-sun'
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
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap');
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
    @media screen and (max-width:700px){
      padding: 5px 0px;
      width: 94px;
    }
    &:focus {
      outline:0;
    }

    .fas {
      margin-left: 10px;
    }
}

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
    background-color: #d4d4d4e8;
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

.containerLink {
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;

    @media screen and (max-width: 700px) {
      padding: 10px 5px;
    }

  .navLinks {
    display: flex;
    align-items: center;
    flex-direction: row;
    img{
      width: 170px;
      height: 90px;
      margin-right: 30px;
      @media screen and (max-width:700px){
        width: 80px;
        height: 56px;
        margin-right: 10px;
      }
    }
  }

  a {
    margin-right: 20px;
    font-size: 18px;
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
