<template>
  <div class="search">
    <input type="text" class="input" placeholder="Search" />
    <i class="input-icon fas fa-search"></i>
  </div>
</template>

<style lang="sass" scoped>
  .search
      display: flex
      position: relative
      width: 100%

  .input
      border: 1px solid slategray
      border-radius: 50px
      width: 40%
      padding: 15px
      &:focus
          outline-style: none
  .input-icon
      color: #B6B5BA
      position: absolute
      top: 50%
      left: 35%
      transform: translateY(-50%)
      font-size: 14px
</style>
