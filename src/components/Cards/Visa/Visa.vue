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
    name: "Visa",
    extends: Base,
  };
</script>

<style lang="sass" scoped>
  @import "@/assets/local/local.sass"
  .card
    background: rgb(34,178,237)
    background: linear-gradient(293deg, rgba(34,178,237,0.9640231092436975) 38%, rgba(19,67,236,1) 77%, rgba(209,202,247,1) 92%)
</style>
