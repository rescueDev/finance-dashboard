<template>
  <div class="logo">
    <div class="logo__image"></div>
    <h3 class="logo__title">Payme</h3>
  </div>
</template>

<style lang="sass" scoped>
  .logo
    display: flex
    align-items: center

    &__image
      width: 30px
      height: 30px
      background-image: url('../assets/img/payme.png')
      background-size: cover
      background-position: center
      margin-right: 10px

    &__title
      font-size: 16px
      color: #7A2D86
      font-weight: bold
</style>
