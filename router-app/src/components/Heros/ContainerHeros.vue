<template>
  <div>
    <CardHero :heros="heros" @heroClick="onHeroClick"/>
    <ModalHero v-if="isModalShowing" :idHero="idHero"/>
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
      heros: null,
      isModalShowing: false,
      idHero: null
    }
  },
  methods: {
    onHeroClick (id) {
      this.isModalShowing = true;
      this.idHero = id
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
