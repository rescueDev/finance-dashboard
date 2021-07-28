<template>
  <div class="card" @click="onClick" :class="[{ 'card--active': selected }]">
    <div class="card__balance">{{ data.balance }}</div>
    <div class="card__center">
      <div class="card__number">{{ data.number }}</div>
    </div>
    <div class="card__bottom">
      <div class="card__number">{{ data.expirationDate }}</div>
      <div class="card__logo"></div>
    </div>
  </div>
</template>
<script>
  import Base from "@/components/Cards/base.vue";
  export default {
    name: "Mastercard",
    extends: Base,
  };
</script>

<style lang="sass" scoped>
  @import "@/assets/local/local.sass"
  .card
    background: #FC5C7D  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D)  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6A82FB, #FC5C7D) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    &__bottom
    display: flex
    justify-content: space-between


    &__logo
        width: 60px
        height: 60px
        background-image: url("https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg")
        background-position: center
        background-size: contain
        background-repeat: no-repeat
</style>
