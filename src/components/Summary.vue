<template>
  <div class="summary">
    <div class="summary__top">
      <div class="summary__info">
        <div class="summary__avatar" :style="style" />
        <h3 class="summary__title">Tom Shelby</h3>
      </div>
      <slot></slot>
    </div>
    <div class="summary__center">
      <h3 class="summary__center-title">Total balance</h3>
      <h3 class="summary__center-value">${{ card.balance }} $</h3>
    </div>
    <div class="summary__center-extra">
      <slot name="tabs">Tabs</slot>
    </div>
    <div class="summary__bottom">
      <div class="summary__controls">
        <slot name="title"></slot>
        <slot name="toggler"></slot>
      </div>
      <slot name="chart"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      profile: {
        type: Object,
        default: function() {
          return {};
        },
      },
      card: {
        type: Object,
        default: function() {
          return {};
        },
      },
    },
    computed: {
      style() {
        return `background-image: url(${this.profile.avatar})`;
      },
    },
  };
</script>

<style lang="sass" scoped>
  .summary
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%

    &__top
      display: flex
      align-items: center
      justify-content: space-between


    &__info
      display: flex
      align-items: center
      justify-content: space-between

    &__avatar
      width: 50px
      height: 50px
      border-radius: 50%
      margin-right: 8px
      background-size: cover
      background-position: center

    &__title
      font-size: 18px
      color: #4B3153
      font-weight: bold
    &__icon
      color: #DCD6DC
      font-size: 25px
    &__center
        display: flex
        flex-direction: column
        align-items: center
        &-extra
          // display: flex
          // flex-direction: row
          // align-items: center
          // justify-content: space-between
          // width: 100%


        &-title
          font-size: 14px
          margin-bottom: 10px
          color: #948C95
        &-value
          font-size: 36px
          font-weight: bold
          letter-spacing: 2px
          color: #493253
    &__bottom


    &__controls
      display: flex
      justify-content: space-between
      align-items: center
      margin-top: 30px
</style>
