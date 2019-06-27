<template>
  <div class="containerConnections">
    <ul>
        <li class="field">
          <div class="iconWork">
            <div class="Durability">
              <i class="fas fa-users fa-lg"></i>
              <label>Group affiliation</label>
            </div>
          </div>
          <p>{{connections['group-affiliation']}}</p>
        </li>
        <li class="field">
          <div class="iconWork">
            <div class="Durability">
              <i class="far fa-heart fa-lg"></i>
              <label>Relatives</label>
            </div>
          </div>
          <p>{{connections.relatives}}</p>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'Connections',
  props: ['dataHero'],
  data () {
    return {
      connections: this.dataHero.connections
    }
  }
}
</script>
<style lang="scss" scoped>
.containerConnections{
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
