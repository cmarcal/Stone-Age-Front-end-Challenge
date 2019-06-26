<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button @click="closeModal"> close modal</button>
      inside in modal
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalHero',
  props: ['idHero', 'dataHero'],
  data () {
    return {
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
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
      overflow-x: auto;
      display: flex;
      flex-direction: column;
    }
  }
</style>
