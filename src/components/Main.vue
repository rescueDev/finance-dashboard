<template>
  <div class="main">
    <div class="main__top">
      <slot name="search"></slot>
      <slot name="icon"></slot>
    </div>
    <div class="main__center">
      <!-- Bank account (show the cc) -->
      <slot name="account"></slot>
    </div>
    <div class="main__bottom">
      <!-- transactions list slot  -->
      <slot name="trasactions"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .main
    &__top
      display: flex
      align-items: center
      justify-content: space-between
    &__center
      margin: 40px 0
    &__bottom
      margin-top: 30px
</style>
