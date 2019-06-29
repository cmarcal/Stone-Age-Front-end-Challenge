<template>
  <div>
    <Banner :title="title" :showDescription="showDescription" />
    <CardHero v-if="!isLoading" :arrayIDSFavorite="arrayIDSFavorite" :heros="heros" @heroClick="onHeroClick"/>
    <ModalHero v-if="isModalShowing" :arrayIDSFavorite="arrayIDSFavorite" :idHero="idHero" :dataHero="dataHero" @closeModal="onCloseModal" @handlerFavorite="onHandlerFavorite"/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import {HTTP} from '@/Api/api'
import CardHero from '../../_common/CardHero'
import ModalHero from '../../_common/ModalHero'
import Banner from '../../_common/Banner'
Vue.use(VueCookies)

export default {
  name: 'ContainerHeros',
  components: {CardHero, ModalHero, Banner},
  data () {
    return {
      title: 'Welcome to the list of all heros',
      showDescription: true,
      arrayIDSFavorite: [],
      heros: [],
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
      if (this.arrayIDSFavorite.includes(id)) {
        let index = this.arrayIDSFavorite.indexOf(id)
        this.arrayIDSFavorite.splice(index, 1)
      } else {
        this.arrayIDSFavorite.push(id)
      }

      VueCookies.set('favoriteHero', JSON.stringify(this.arrayIDSFavorite))
    }
  },
  created () {
    // get all id setting in coockie and add in variable local
    if (this.arrayIDSFavorite.length === 0) {
      let ac = JSON.parse(VueCookies.get('favoriteHero'))
      if (ac !== null) {
        for (var i = 0; i < ac.length; i++) {
          this.arrayIDSFavorite.push(ac[i])
        }
      }
    }

    HTTP.get(process.env.TOOKEN + '/search/ba/')
      .then(response => {
        for (var i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].biography.alignment === 'good') {
            this.heros.push(response.data.results[i])
          }
        }
        this.isLoading = false
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
