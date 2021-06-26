<template>
  <i class="toggler fas" :class="[icon]"></i>
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
  .toggler
      color: #DCD6DC
      font-size: 25px
</style>
