import Vue from 'vue'
import Router from 'vue-router'
import ContainerSearch from '@/components/searchName/ContainerSearch'
import ContainerHeros from '@/components/Heros/ContainerHeros'
import ContainerFavorite from '@/components/Favorites/ContainerFavorites'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ContainerHeros',
      component: ContainerHeros
    },
    {
      path: '/search',
      name: 'ContainerSearch',
      component: ContainerSearch
    },
    {
      path: '/favorites',
      name: 'ContainerFavorite',
      component: ContainerFavorite
    }
  ]
})
