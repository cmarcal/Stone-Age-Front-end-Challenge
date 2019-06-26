<template>
  <div>
    <CardHero v-if="!isLoading" :heros="heros" @heroClick="onHeroClick"/>
    <ModalHero v-if="isModalShowing" :idHero="idHero" :dataHero="heros" @closeModal="onCloseModal"/>
  </div>
</template>

<script>
import {HTTP} from '@/Api/api'
import CardHero from '../../_common/CardHero'
import ModalHero from '../../_common/ModalHero'

export default {
  name: 'ContainerHeros',
  components: {CardHero, ModalHero},
  data () {
    return {
      heros: null,
      isModalShowing: false,
      isLoading: true,
      idHero: 620
    }
  },
  methods: {
    onHeroClick (id) {
      this.isModalShowing = true;
      this.idHero = id
    },
    onCloseModal () {
      this.isModalShowing = false;
    }
  },
  created () {
    HTTP.get(process.env.TOOKEN + '/620')
      .then(response => {
        this.isLoading = false;
        this.heros = response.data
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
