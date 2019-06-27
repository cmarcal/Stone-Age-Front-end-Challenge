<template>
  <div class="hello">
    <h2>Find one hero</h2>
    <div class="inputSearch">
      <input v-model="valeuSearch" placeholder="ex.: iron man">
      <i class="fas fa-search"></i>
    </div>
     <CardHero v-if="!isLoading" :arrayFavorite="arrayFavorite" :heros="heros" @heroClick="onHeroClick"/>
    <ModalHero v-if="isModalShowing" :arrayFavorite="arrayFavorite"  :favorite="favorite" :idHero="idHero" :dataHero="dataHero" @closeModal="onCloseModal" @handlerFavorite="onHandlerFavorite"/>
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
  name: 'ContainerSearch',
  components: {CardHero, ModalHero},
  data () {
    return {
      arrayFavorite: [],
      heros: null,
      valeuSearch: '',
      isModalShowing: false,
      isLoading: true,
      idHero: null,
      dataHero: null
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
  computed: {
    searchHero: function () {
      HTTP.get(process.env.TOOKEN + '/search/' + this.valeuSearch)
        .then(response => {
          this.isLoading = false
          this.heros = response.data
        })
        .catch(err => {
          console.log(err.message)
        })

      if (this.valeuSearch !== '') {
        return this.heros
      }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h1, h2 {
  font-weight: normal;
}
.inputSearch {
  input {
    margin: 20px 0;
    width: 40%;
    border: none;
    border-bottom: 2px solid #2a3542;

    &::placeholder {
      padding: 5px;
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
