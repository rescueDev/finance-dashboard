<template>
  <div class="toggler">
    <component
      class="toggler"
      :is="type"
      :class="[style]"
      @click="$emit('click-toggle')"
    >
      {{ text }}
    </component>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
      },
      icon: {
        type: String,
      },
      text: {
        type: String,
      },
    },
    computed: {
      style() {
        return this.type === "span"
          ? "toggler--text"
          : `${this.icon} toggler--icon`;
      },
    },
  };
</script>

<style lang="sass" scoped>
  .toggler
    &:hover
      cursor: pointer

  .toggler--text
    color: #EC6812
    font-size: 14px
  .toggler--icon
    color: #DCD6DC
    font-size: 25px
    width: 40px
</style>
