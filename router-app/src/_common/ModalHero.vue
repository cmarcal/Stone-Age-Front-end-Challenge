<template>
  <div class="modal-backdrop">
    <div class="modal">
      <i @click="closeModal" class="fas fa-times fa-lg"></i>
      <div class="body">
        <img :src="dataHero.image.url" :title="dataHero.image.name" :alt="dataHero.image.name">
        <h2>{{dataHero.name}}</h2>

        <div class="tools">
          <ul class="rowTools">
            <li v-for="(tab, index) in tabs" :key="index" @click="setActive(index, tab.name)"  :class="[{'active': activeTab === index}, tab.class]" class="formatedButton">
              {{tab.title}}
            </li>
          </ul>
        </div>

        <component :is="currentTabComponent" :dataHero="dataHero"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Appearance from '../components/Tabs/Appearance'
import Biography from '../components/Tabs/Biography'
import Connections from '../components/Tabs/Connections'
import PowerStats from '../components/Tabs/PowerStats'
import Work from '../components/Tabs/Work'

export default {
  name: 'ModalHero',
  props: ['idHero', 'dataHero'],
  components: {Appearance, Biography, Connections, PowerStats, Work},
  data () {
    return {
      activeTab: 0,
      currentTab: 'PowerStats',
      tabs: [{name: 'PowerStats', title: 'Power Stats'}, {name: 'Biography', title: 'Biography'}, {name: 'Appearance', title: 'Appearance'}, {name: 'Work', title: 'Work'}, {name: 'Connections', title: 'Connections'}]
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    setActive (index, tabName) {
      this.activeTab = index
      this.currentTab = tabName
    }
  },
  computed: {
    currentTabComponent () {
      return this.currentTab
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;

    .modal {
      background: #FFFFFF;
      box-shadow: 2px 2px 20px 1px;
      padding: 10px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      width: 50%;
      border-radius: 8px;
      position: absolute;
      left: unset;
      right: unset;

      .fa-times {
        cursor: pointer;
        text-align: right;
        margin-top:10px;
        margin-right: 15px;
        color: #b9b5b5
      }

      img {
        width: 230px;
        height: 230px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
      }

      .rowTools {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        padding: 5px 15px;
        color: #36648B;
        font-weight: 600;

        .formatedButton {
          //box-shadow: 1px 1px 4px 0;
          border:2px solid #f9f9f9;
          border-radius: 5px;
          padding: 16px 10px;
          width: 135px;
          cursor: pointer;

          &:hover {
            border-top: 2px solid #36648B;
          }

           &.active {
            border-top: 2px solid #36648B;
          }
        }
      }
    }
  }

  @media screen and (max-width: 440px){
    .modal{
      width: 100%;
    }
  }
</style>
