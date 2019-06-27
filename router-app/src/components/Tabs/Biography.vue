<template>
  <div class="containerBiography">
    <ul>
      <li class="field">
        <label>Name:</label>
        <p>{{biography['full-name']}}</p>
      </li>
      <li class="field">
        <label>Alter Egos:</label>
        <p>{{biography['alter-egos']}}</p>
      </li>
      <li class="field">
        <label>Place of birth:</label>
        <p>{{biography['place-of-birth']}}</p>
      </li>
      <li class="field">
        <label>First Appearance:</label>
        <p>{{biography['first-appearance']}}</p>
      </li>
      <li class="field">
        <label>Publisher:</label>
        <p>{{biography.publisher}}</p>
      </li>
      <li class="field">
        <label>Alignment:</label>
        <p>{{biography.alignment}}</p>
      </li>
      <li class="field">
        <label>Aliases:</label>
        <p v-for="(a, index) in biography.aliases" :key="index">{{a}}, </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Biography',
  props: ['dataHero'],
  data () {
    return {
      biography: this.dataHero.biography
    }
  }
}
</script>
<style lang="scss" scoped>
.containerBiography {
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
      border-bottom: 1px solid #36648B;
      margin-top:20px;
      flex-wrap: wrap;
      flex-direction: row;

      label {
        font-weight: bold;
        margin-bottom: 0;
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
