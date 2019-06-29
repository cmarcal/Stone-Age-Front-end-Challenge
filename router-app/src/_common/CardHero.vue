<template>
  <div class="containerBox">
    <div v-for="(h, index) in heros" :key="index" class="box">
      <div class="card">
        <a href="javascript:void(0)" @click="heroClick(h)" :alt="'see more details for ' + h.name">
          <i v-if="arrayFavorite.includes(h.id)" class="fas fa-star fa-lg" title="hero favorite"></i>
          <div class="boxInformation">
            <h2>{{h.name}} </h2>
            <p>[+] informations</p>
          </div>
          <img :src="h.image.url" :title="h.image.name" :alt="h.image.name">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardHero',
  props: ['heros', 'arrayFavorite'],
  methods: {
    heroClick (obj) {
      this.$emit('heroClick', obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.containerBox {
  padding: 10px 50px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .box {
    margin: 5px;
    width: 15%;
    @media screen and (max-width: 700px){
      width: 45%;
    }

    .card {
      position: relative;
      width: 100%;
      height: 90%;

      a {
        position: relative;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        overflow: hidden;

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
          transition: transform .2s;

          &:hover {
            transform: scale(1.3);
          }
        }

        .boxInformation {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 10;
          padding: 8px 1.6px 8px 1.6px;
          text-align: center;

          h2{
            font-weight: 900;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          p{
            margin-bottom: 0;
            font-size: 13px;
            font-weight: 700
          }
        }
      }
    }
 }
}
</style>
