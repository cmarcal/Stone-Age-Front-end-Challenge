<template>
  <div>
    <div class="containerWork">
      <ul>
        <li class="field">
          <div class="iconWork">
            <div class="Durability">
              <i class="fas fa-briefcase fa-lg"></i>
              <label>Occupation</label>
            </div>
          </div>
          <p>{{work.occupation}}</p>
        </li>
        <li class="field">
          <div class="iconWork">
            <div class="Durability">
              <i class="far fa-building fa-lg"></i>
              <label>Base</label>
            </div>
          </div>
          <p>{{work.base}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Work',
  props: ['dataHero'],
  data () {
    return {
      work: this.dataHero.work
    }
  }
}
</script>
<style lang="scss" scoped>
.containerWork{
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

      .iconWork {
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
