<template>
  <div class="search">
    <Banner :title="title" :showDescription="showDescription" />
    <h2><span>Find one hero or villain</span></h2>
    <div class="inputSearch">
      <input v-model="valeuSearch" placeholder="ex.: iron man" v-on:keyup="searchHero">
      <i class="fas fa-search"></i>
    </div>
    <i v-if="isLoading" class="fa fa-spinner fa-spin fa-2x"></i>
    <ErroSearch v-if="msgErro" :wantedHero="valeuSearch"/>
    <CardHero v-else :arrayIDSFavorite="arrayIDSFavorite" :heros="heros" @heroClick="onHeroClick"/>
    <ModalHero v-if="isModalShowing" :arrayIDSFavorite="arrayIDSFavorite"  :favorite="favorite" :idHero="idHero" :dataHero="dataHero" @closeModal="onCloseModal" @handlerFavorite="onHandlerFavorite"/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import {HTTP} from '@/Api/api'
import CardHero from '../../_common/CardHero'
import ModalHero from '../../_common/ModalHero'
import Banner from '../../_common/Banner'
import ErroSearch from '../Error/ErrorSearch'
Vue.use(VueCookies)

export default {
  name: 'ContainerSearch',
  components: {CardHero, ModalHero, Banner, ErroSearch},
  data () {
    return {
      title: 'Welcome to the search page',
      showDescription: true,
      arrayIDSFavorite: [],
      heros: null,
      valeuSearch: null,
      isModalShowing: false,
      isLoading: false,
      idHero: null,
      dataHero: null,
      msgErro: false
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
    },
    searchHero () {
      this.isLoading = true
      if (this.valeuSearch !== '') {
        HTTP.get(process.env.TOOKEN + '/search/' + this.valeuSearch)
          .then(response => {
            this.isLoading = false
            if (response.data.response === 'error') {
              this.msgErro = true
            } else {
              this.msgErro = false
              this.heros = response.data.results
            }
          })
          .catch(err => {
            console.log(err.message)
          })
      } else {
        this.msgErro = false
        this.isLoading = false
      }
    }
  },
  created () {
    // get all id setting in coockie and add in variable local
    if (this.arrayIDSFavorite.length === 0) {
      let ac = JSON.parse(VueCookies.get('favoriteHero'))
      for (var i = 0; i < ac.length; i++) {
        this.arrayIDSFavorite.push(ac[i])
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search {
   span {
    border-bottom: 2px solid #F7921C;
  }
}
.inputSearch {
  margin-top: 15px;
  input {
    margin: 20px 0;
    width: 32%;
    margin-left: 21px;
    height: 45px;
    border: none;
    border-radius: 5px;
    @media screen and(max-width: 700px){
      width: 90%;
    }

    &::placeholder {
      padding: 10px;
    }
    &:focus{
    outline: none;
}
  }
  i {
    position: relative;
    right: 30px;
    color: #2a3542
  }
}
</style>
