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
    name: "AmericanExpress",
    extends: Base,
  };
</script>

<style lang="sass" scoped>
  @import "@/assets/local/local.sass"
  .card
    background: rgb(63,94,251)
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)

    &__logo
      width: 60px
      height: 60px
      background-image: url("https://www.logo.wine/a/logo/American_Express/American_Express-Logo.wine.svg")
      background-position: center
      background-size: contain
      background-repeat: no-repeat
</style>
