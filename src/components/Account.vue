<template>
  <div class="account">
    <div class="account__title">
      <slot>Title</slot>
    </div>
    <!-- this will be flex content -->
    <div class="account__content">
      <div class="account__info">
        <h3 class="account__info-title">{{ card.circuit }}</h3>
        <h3 class="account__info-title">Total balance</h3>
        <h3 class="account__info-title">{{ card.balance }} $</h3>
      </div>
      <div class="account__extra">
        <slot name="select">Select</slot>
      </div>
      <div class="account__extra-center">
        <slot name="toggle">Toggle </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        default: function() {
          return {};
        },
      },
    },
  };
</script>

<style lang="sass" scoped>
  .account

      &__title
          margin: 20px 0
          margin-bottom: 30px

      &__content
          display: flex
          align-items: center
          justify-content: space-between
          margin: 20px 0
      &__info
          width: 60%
          border: 1px solid slategray
          padding: 40px
          color: white
          background: #4B3153
          border-radius: 40px

          &-title
                font-size: 30px
                color: white
                font-weight: bold

          &-title:first-child
                text-transform: uppercase
                font-style: italic
                margin-bottom: 40px
          &-title:nth-child(2)
                color: #8F7E96
                font-size: 14px
                font-weight: normal
                margin-bottom: 10px

          &-title:last-child
                font-style: none
                letter-spacing: 2px
      &__extra
        &-top
          align-self: flex-start
          justify-self: flex-start
        &-center
          justify-self: flex-end
          align-self: flex-start
</style>
