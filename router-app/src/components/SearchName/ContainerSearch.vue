<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <input v-model="valeuSearch" placeholder="ex.: iron man">
    <p>{{searchHero}}</p>
    <p>{{info2}}</p>
  </div>
</template>

<script>
import {HTTP} from '@/Api/api'

export default {
  name: 'ContainerSearch',
  data () {
    return {
      msg: 'Escolha um Heroi',
      info: null,
      info2: null,
      valeuSearch: ''
    }
  },
  computed: {
    searchHero: function () {
      HTTP.get(process.env.TOOKEN + '/search/' + this.valeuSearch)
        .then(response => {
          this.info = response.data.results
        })
        .catch(err => {
          console.log(err.message)
        })

      if (this.valeuSearch !== '') {
        return this.info
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
