<template>
  <h3 class="title">{{ title }}</h3>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      },
    },
    computed: {},
  };
</script>

<style lang="sass" scoped>
  .title
      font-size: 26px
      color: #4B3153
      font-weight: bold
</style>
