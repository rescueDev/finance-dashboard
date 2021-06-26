<template>
  <div class="search">
    <input type="text" class="input" placeholder="Search" />
    <i class="input-icon fas fa-search"></i>
  </div>
</template>

<style lang="sass" scoped>
  .search
      display: flex
      // border: 1px solid #7A2D86
      position: relative
      width: 100%

  .input
      border: 1px solid slategray
      border-radius: 50px
      height: 40px
      width: 40%
      padding: 15px
      &:focus
          outline-style: none
  .input-icon
      color: #B6B5BA
      position: absolute
      top: 1em
      left: 35%
      font-size: 14px
</style>
