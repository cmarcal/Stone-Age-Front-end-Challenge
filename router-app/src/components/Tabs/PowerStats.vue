<template>
  <div class="containerPower">
    <ul>
      <li>
        <div class="iconPower">
          <div class="Intelligence">
            <i class="fas fa-brain fa-lg"></i>
            <span>Intelligence</span>
          </div>
        </div>
        <b-progress :value="power.intelligence === 'null' ? 0 : parseInt(power.intelligence)" :max="max" show-progress animated variant="primary"></b-progress>
      </li>
      <li>
        <div class="iconPower">
          <div class="Strength">
            <i class="fas fa-fist-raised fa-lg"></i>
            <span>Strength</span>
          </div>
        </div>
        <b-progress :value="power.strength === 'null' ? 0 : parseInt(power.strength)" :max="max" show-progress animated variant="success"></b-progress>
      </li>
      <li>
         <div class="iconPower">
          <div class="Speed">
            <i class="fas fa-running fa-lg"></i>
            <span>Speed</span>
          </div>
        </div>
        <b-progress :value="power.speed === 'null' ? 0 : parseInt(power.speed)" :max="max" show-progress animated variant="warning"></b-progress>
      </li>
      <li>
         <div class="iconPower">
          <div class="Durability">
            <i class="fas fa-shield-alt fa-lg"></i>
            <span>Durability</span>
          </div>
        </div>
        <b-progress :value="power.durability === 'null' ? 0 : parseInt(power.durability)" :max="max" show-progress animated variant="info"></b-progress>
      </li>
      <li>
         <div class="iconPower">
          <div class="Power">
            <i class="fas fa-haykal fa-lg"></i>
            <span>Power</span>
          </div>
        </div>
        <b-progress :value="power.power === 'null' ? 0 :  parseInt(power.power)" :max="max" show-progress animated variant="danger"></b-progress>
      </li>
      <li>
         <div class="iconPower">
          <div class="Combat">
            <i class="fas fa-user-ninja fa-lg"></i>
            <span>Combat</span>
          </div>
        </div>
        <b-progress :value="power.combat === 'null' ? 0 :  parseInt(power.combat)" :max="max" show-progress animated variant="secondary"></b-progress>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

export default {
  name: 'PowerStats',
  props: ['dataHero'],
  data () {
    return {
      power: this.dataHero.powerstats,
      max: 100,
      value: 63
    }
  }
}
</script>
<style lang="scss" scoped>
  .containerPower {
    padding: 0px 20px;

    ul {
      list-style-type: none;
      padding-left: 0;
      display: inline;
      text-align: left;

      li {
        margin:20px 0;
        display: flex;
        width: 100%;
        
        .progress {
          width: 92%;
          font-weight: bold;
        }        
        .Intelligence {
            color: #007bff;
          }
          .Strength {
            color: #28a745;
          }
          .Speed {
            color: #ffc107;
          }
          .Durability {
            color:#17a2b8;
          }
          .Power {
            color:#dc3545;
          }
          .Combat {
            color: #6c757d;
          }

        .iconPower {
          width: 8%;
          div {
            display: flex;
            align-items: center;
            flex-direction: column;

            span {
              margin-top: 10px;
              font-size: 10px;
            }
          }
        }
      }
      
    }
  }
</style>
