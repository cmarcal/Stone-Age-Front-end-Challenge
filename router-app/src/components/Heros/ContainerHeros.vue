<template>
  <div>
    <CardHero :heros="heros"/>
  </div>
</template>

<script>
import {HTTP} from '@/Api/api'
import CardHero from './CardHero'

export default {
  name: 'ContainerHeros',
  components: {CardHero},
  data () {
    return {
      heros: null
    }
  },
  created () {
    HTTP.get(process.env.TOOKEN + '/620')
      .then(response => {
        this.heros = response.data
        console.log(response.data)
      })
      .catch(err => {
        console.log(err.message)
      })
      return this.heros
  }
}

</script>

<style scoped>

</style>
