<template>
  <!-- classe da modificare -->
  <i class="icon fas fa-bell" :class="[icon]"></i>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
      },
    },
  };
</script>

<style lang="sass" scoped>
  .icon
      color: #DCD6DC
      font-size: 25px
</style>
