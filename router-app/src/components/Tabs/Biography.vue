<template>
  <div class="containerBiography">
    <ul>
      <li class="field">
         <div class="iconBiography">
          <div class="Durability">
            <i class="fas fa-signature fa-lg"></i>
            <label>Nmae:</label>
          </div>
        </div>
         <p>{{biography['full-name']}}</p>
      </li>
      <li class="field">
         <div class="iconBiography">
          <div class="Durability">
            <i class="fas fa-random fa-lg"></i>
            <label>Alter Egos:</label>
          </div>
        </div>
         <p>{{biography['alter-egos']}}</p>
      </li>
      <li class="field">
         <div class="iconBiography">
          <div class="Durability">
            <i class="far fa-hospital fa-lg"></i>
            <label>Place of birth:</label>
          </div>
        </div>
        <p>{{biography['place-of-birth']}}</p>
      </li>
       <li class="field">
         <div class="iconBiography">
          <div class="Durability">
            <i class="fas fa-award fa-lg"></i>
            <label>First appearance:</label>
          </div>
        </div>
        <p>{{biography['first-appearance']}}</p>
      </li>
       <li class="field">
         <div class="iconBiography">
          <div class="Durability">
            <i class="fas fa-journal-whills fa-lg"></i>
            <label>Publisher:</label>
          </div>
        </div>
        <p>{{biography.publisher}}</p>
      </li>
      <li class="field">
         <div class="iconBiography">
          <div class="Durability">
            <i class="fas fa-bible fa-lg"></i>
            <label>Alignment:</label>
          </div>
        </div>
        <p>{{biography.alignment}}</p>
      </li>
      <li class="field">
         <div class="iconBiography">
          <div class="Durability">
            <i class="fas fa-user-friends fa-lg"></i>
            <label>Aliases:</label>
          </div>
        </div>
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
      //border-bottom: 1px solid #36648B;
      margin-top:20px;
      flex-wrap: wrap;
      flex-direction: row;

      .iconBiography {
        width: 8%;

        div {
          display: flex;
          align-items: center;
          flex-direction: column;

          label {
            font-size: 10px;
            font-weight: bold;
            margin-bottom: 0;
            margin-top: 10px;
            text-align: center;
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
