<template>
  <div class="card" @click="onClick" :class="[{ 'card--active': selected }]">
    <div class="card__balance">{{ data.balance }}</div>
    <div class="card__center">
      <div class="card__number">{{ data.number }}</div>
    </div>
    <div class="card__bottom">
      <div class="card__number">{{ data.circuit }}</div>
    </div>
  </div>
</template>
<script>
  import Base from "@/components/Cards/base.vue";
  export default {
    name: "Maestro",
    extends: Base,
  };
</script>

<style lang="sass" scoped>
  @import "@/assets/local/local.sass"
  .card
    // background: rgb(207,101,9)
    // background: linear-gradient(293deg, rgba(207,101,9,0.9640231092436975) 38%, rgba(236,183,19,1) 77%, rgba(226,158,109,1) 92%)
    background: #1E9600  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF0000, #FFF200, #1E9600)  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FF0000, #FFF200, #1E9600) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */





    &__logo
</style>
