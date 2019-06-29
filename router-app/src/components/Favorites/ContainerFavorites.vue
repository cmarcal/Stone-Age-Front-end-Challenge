<template>
  <div>
    <Banner :title="title" :showDescription="false" />
    <CardHero v-if="!isLoading" :arrayIDSFavorite="arrayIDSFavorite" :heros="arrayFavorite" @heroClick="onHeroClick"/>
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
  name: 'ContainerFavorite',
  components: {CardHero, ModalHero, Banner},
  data () {
    return {
      title: 'Welcome to your list of favorite',
      showDescription: false,
      isLoading: true,
      arrayIDSFavorite: [],
      arrayFavorite: [],
      idHero: null,
      isModalShowing: false,
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

        let idxArrayShow = this.arrayFavorite.findIndex(x => x.id === id)
        this.arrayFavorite.splice(idxArrayShow, 1)
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

    for (var idx = 0; idx < this.arrayIDSFavorite.length; idx++) {
      HTTP.get(process.env.TOOKEN + '/' + this.arrayIDSFavorite[idx])
        .then(response => {
          this.arrayFavorite.push(response.data)
          this.isLoading = false
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
