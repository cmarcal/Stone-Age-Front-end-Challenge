<template>
  <div>
    <div class="containerAppearance">
    <ul>
      <li class="field">
         <div class="iconApperance">
          <div class="Durability">
            <i class="fas fa-restroom"></i>
            <label>Gender</label>
          </div>
        </div>
        <p>{{appearance.gender}}</p>
      </li>
       <li class="field">
         <div class="iconApperance">
          <div class="Durability">
            <i class="fas fa-user-secret"></i>
            <label>Race</label>
          </div>
        </div>
        <p>{{appearance.race}}</p>
      </li>
      <li class="field">
         <div class="iconApperance">
          <div class="Durability">
            <i class="fas fa-arrows-alt-v"></i>
            <label>Height</label>
          </div>
        </div>
        <p v-for="(a, index) in appearance.height" :key="index">{{a}} / </p>
      </li>
      <li class="field">
         <div class="iconApperance">
          <div class="Durability">
            <i class="fas fa-weight-hanging"></i>
            <label>Weight</label>
          </div>
        </div>
        <p v-for="(a, index) in appearance.weight" :key="index">{{a}} / </p>
      </li>
      <li class="field">
         <div class="iconApperance">
          <div class="Durability">
            <i class="far fa-eye"></i>
            <label>Eye color</label>
          </div>
        </div>
        <p>{{appearance['eye-color']}}</p>
      </li>
      <li class="field">
         <div class="iconApperance">
          <div class="Durability">
            <i class="fab fa-keybase"></i>
            <label>Hair color</label>
          </div>
        </div>
        <p>{{appearance['hair-color']}}</p>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Appearance',
  props: ['dataHero'],
  data () {
    return {
      appearance: this.dataHero.appearance
    }
  }
}
</script>
<style lang="scss" scoped>
.containerAppearance {
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  ul {
    padding-left: 0;
    width: 100%;
    text-align: left;

    .field {
      width: 100%;
      display: flex;
      //border-bottom: 1px solid #36648B;
      margin-top:20px;
      flex-wrap: wrap;
      flex-direction: row;

      .iconApperance {
        width: 8%;

        div {
          display: flex;
          align-items: center;
          flex-direction: column;

          label {
            font-size: 10px;
            font-weight: bold;
            margin-bottom: 0;
          }
        }
      }
      p {
        font-size: 14px;
        margin: 2px 0 0 9px;
        display: inline-block;
      }
    }
  }
}
</style>
