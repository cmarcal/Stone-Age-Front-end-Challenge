<template>
  <div class="containerBox">
    <div v-for="n in 7" :key="n" class="box">
      <div class="card">
        <a href="javascript:void(0)" @click="heroClick(heros.id)" :alt="'ver mais detalhes do ' + heros.name">
          <i class="fas fa-star fa-lg" title="heroi favoritado"></i>
          <div class="boxInformation">
            <h2>{{heros.name}}</h2>
          </div>
          <img :src="heros.image.url" :title="heros.image.name" :alt="heros.image.name">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardHero',
  props: ['heros'],
  methods: {
    heroClick (id) {
      this.$emit('heroClick', id)
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
  justify-content: space-between;

  .box {
    margin: 5px;
    width: 15%;

    .card {
      position: relative;
      width: 100%;

      a {
        position: relative;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        
        .fa-star {
          color: #FFB90F;
          position: absolute;
          right: 5px;
          top: 10px;
        }

        img{
          width: 100%;
          height: 100%;
          position: relative;
          z-index: -1;
        }

        .boxInformation {
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 98.5%;
          z-index: 10;
          padding: 12px 1.6px 8px 1.6px;
          background-color: #3a3a3acc;
          color: #fff;
          text-align: center;

          h2{
            font-size: 13px;
          }
        }
      }
   }
}

  @media screen and (max-width: 440px){
    .box{
      width: 100%;
    }
  }
}
  
</style>
