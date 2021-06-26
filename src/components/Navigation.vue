<template>
  <div class="navigation">
    <ul class="navigation__menu">
      <li v-for="(item, index) in menu" :key="index" class="navigation__item">
        <i class="navigation__item-icon" :class="item.icon"></i>
        <span class="navigation__item-label">
          {{ item.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      menu: {
        type: Array,
        default: function() {
          return [];
        },
      },
    },
  };
</script>

<style lang="sass" scoped>

  .navigation__menu
    list-style-type: none

  .navigation__item
      padding: 25px 0
      color: #B6B5BA
      &-icon
          margin-right: 10px
          font-size: 20px
      &__label
          font-size: 16px
</style>
