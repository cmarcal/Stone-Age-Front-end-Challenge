<template>
  <div class="containerErro">
    <div class="boxErro">
      <h2>Found Nothing We Have</h2>
      <p>sorry, we couldn't find any heros or villain related to "<span>{{wantedHero}}</span>".</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ErroSearch',
  props: ['wantedHero']
}
</script>
<style lang="scss" scoped>
.containerErro {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .boxErro {
    border: 1px solid;
    width: 32%;
    border-radius: 8px;
    padding: 20px 40px;
    @media screen and(max-width: 700px){
      width: 90%;
    }
    h2 {
      color: #F7921C;
      font-weight: bold;
      @media screen and(max-width: 700px){
       font-size: 23px;
      }
    }
    p {
      margin-top:15px;
      margin-bottom: 0;
      font-weight: 100;
      span {
        font-weight: bold;
        color: #F7921C;
      }
    }
  }
}
</style>
