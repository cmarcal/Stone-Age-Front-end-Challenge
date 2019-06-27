<template>
  <div class="hello">
    <h2>Find one hero</h2>
    <div class="inputSearch">
      <input v-model="valeuSearch" placeholder="ex.: iron man">
      <i class="fas fa-search"></i>
    </div>
    <CardHero v-if="!isLoading" :heros="heros" @heroClick="onHeroClick"/>
    <ModalHero v-if="isModalShowing" :idHero="idHero" :dataHero="dataHero" @closeModal="onCloseModal"/>
  </div>
</template>

<script>
import {HTTP} from '@/Api/api'
import CardHero from '../../_common/CardHero'
import ModalHero from '../../_common/ModalHero'

export default {
  name: 'ContainerSearch',
  components: {CardHero, ModalHero},
  data () {
    return {
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
