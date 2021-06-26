<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <!-- Logo -->
      <slot name="logo"></slot>
    </div>
    <div class="sidebar__center">
      <!-- Navigation sidebar -->
      <slot name="navigation"></slot>
    </div>
    <div class="sidebar__bottom">
      <!-- Button Log out -->

      <slot name="toggle"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .sidebar
    height: 70vh

    &__top
      display: flex
      align-items: center
      justify-content: flex-start


    &__center
      display: flex
      flex-direction: column
      align-items: flex-start
      padding: 20px 0
</style>
