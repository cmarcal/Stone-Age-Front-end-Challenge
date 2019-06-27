<template>
  <div>
    <CardHero v-if="!isLoading" :arrayFavorite="arrayFavorite" :heros="heros" @heroClick="onHeroClick"/>
    <ModalHero v-if="isModalShowing" :arrayFavorite="arrayFavorite" :idHero="idHero" :dataHero="dataHero" @closeModal="onCloseModal" @handlerFavorite="onHandlerFavorite"/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import {HTTP} from '@/Api/api'
import CardHero from '../../_common/CardHero'
import ModalHero from '../../_common/ModalHero'
Vue.use(VueCookies)

export default {
  name: 'ContainerHeros',
  components: {CardHero, ModalHero},
  data () {
    return {
      arrayFavorite: [],
      heros: null,
      isModalShowing: false,
      isLoading: true,
      idHero: null,
      dataHero: []
    }
  },
  methods: {
    onHeroClick (obj) {
      this.isModalShowing = true
      this.idHero = obj.id
      this.dataHero = obj
    },
    onCloseModal () {
      this.isModalShowing = false
    },
    onHandlerFavorite (id) {
      // verify if hero exist in array
      // if exist, remove from array
      // else add in array
      if (this.arrayFavorite.includes(id)) {
        let index = this.arrayFavorite.indexOf(id)
        this.arrayFavorite.splice(index, 1)
      } else {
        this.arrayFavorite.push(id)
      }

      VueCookies.set('favoriteHero', JSON.stringify(this.arrayFavorite))
    }
  },
  created () {
    // get all id setting in coockie and add in variable local
    if (this.arrayFavorite.length === 0) {
      let ac = JSON.parse(VueCookies.get('favoriteHero'))
      for (var i = 0; i < ac.length; i++) {
        this.arrayFavorite.push(ac[i])
      }
    }
    HTTP.get(process.env.TOOKEN + '/search/spider/')
      .then(response => {
        this.isLoading = false
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
