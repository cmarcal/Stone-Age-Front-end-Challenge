<template>
  <div class="containerBanner" >
    <h1>{{title}}</h1>
    <div v-if="showDescription">
      <p>
        Heroes and villains take over the imaginary of people and win the hearts of many people. Is not it?
      </p>
      <p>
        Now, you can choose A super power, what would it be?
      </p>
      <p>
        Comics stuff has launched a collection with the particularities of the main comic and movie characters that will help you in this great decision.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: ['title', 'showDescription']
}
</script>
<style lang="scss" scoped>
.containerBanner {
  padding: 40px 20px;

  h1 {
    margin-bottom: 30px;
    font-family: 'Patrick Hand', cursive;
    letter-spacing: 1px;
    font-size: 45px;
    text-transform: uppercase;
    @media screen and (max-width:700px){
      font-size:38px;
    }
  }
  p {
    font-size: 18px;
    @media screen and (max-width:700px){
      font-size:15px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
