<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <div class="dashboard__left">
      <slot name="left"></slot>
    </div>

    <!-- Central dashboard -->
    <div class="dashboard__center">
      <slot name="center"></slot>
    </div>

    <!-- Right dashboard -->
    <div class="dashboard__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .dashboard
    display: flex
    width: 100%
    border-radius: 30px
    padding: 20px 0
    justify-content: center

    &__left
      width: 250px
      background: #FAFAFA
      border-top-left-radius: 30px
      border-bottom-left-radius: 30px
      padding: 30px

    &__center
      width: 40%
      padding: 30px
      background: #FFFFFF

    &__right
      width: 30%
      border-top-right-radius: 30px
      border-bottom-right-radius: 30px
      padding: 30px
      background: #F3F3F4
</style>
