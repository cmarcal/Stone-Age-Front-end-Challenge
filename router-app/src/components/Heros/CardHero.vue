<template>
  <div class="containerBox">
    <div v-for="n in 5" :key="n" class="box">
      <a href="#" :alt="'ver mais detalhes do ' + heros.name">
        <img :src="heros.image.url" :title="heros.image.name" :alt="heros.image.name">
        <h2>{{heros.name}}</h2>
      </a>
      <i class="far fa-star"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardHero',
  props: ['heros'],
  data () {
    return {

    }
  }  
}
</script>

<style lang="scss" scoped>
.containerBox {
  margin: 10px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .box{
    border: 1px solid #dedede;
    padding: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
    width: 22.8%;

    a {
      display: flex;
      color: #333;
      text-decoration: none;
      width: 100%;

      img{
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-right: 20px;
      }

      h2{
        font-size: 13px;
      }

    }

    .far {
      color: #FFB90F
    }
  }

  @media screen and (max-width: 440px){
    .box{
      width: 100%;
    }
  }
}
  
</style>
