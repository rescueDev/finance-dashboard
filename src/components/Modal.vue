<template>
  <div class="modal">
    <div class="modal__top">
      <slot name="title"></slot>
      <slot name="toggle"></slot>
    </div>
    <div class="modal__center">
      <slot name="center"></slot>
    </div>
    <div class="modal__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="sass" scoped>
  .modal
      width: 700px
      height: 500px
      padding: 20px
      border: 1px solid orange
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      background:#FAFAFA
      border-radius: 20px
      z-index: 999

      &__top
        display: flex
        justify-content: space-between

      &__center
        margin: 30px 0
</style>
