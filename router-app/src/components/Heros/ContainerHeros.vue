<template>
  <div>
    {{heros}}
  </div>
</template>

<script>
import {HTTP} from '@/Api/api'

export default {
  name: 'ContainerHeros',
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
