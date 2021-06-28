<template>
  <div class="transactions">
    <div class="transactions__heading">
      <slot>Title</slot>
      <slot name="toggler">toggle</slot>
    </div>
    <ul class="transactions__list">
      <li v-for="(item, index) in items" :key="index" class="transaction">
        <div class="transaction__info">
          <div
            :style="`background-image: url(${item.icon});`"
            class="transaction__icon"
          />
          <span class="transaction__label">
            {{ item.service }}
          </span>
        </div>
        <div class="transaction__extra">
          <small class="transaction__extra-info">
            {{ item.date }}
          </small>
          <h3
            class="transaction__extra-value"
            :style="[
              item.type === 'income'
                ? { color: '#C06462' }
                : { color: '#9BCF78' },
            ]"
          >
            $ {{ item.amount }}
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: function() {
          return [];
        },
      },
    },
  };
</script>

<style lang="sass" scoped>
  .transactions
      margin-top: 50px
      &__heading
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 30px

      &__list
        overflow: auto
        height: 170px

  .transaction
      display: flex
      align-items: center
      justify-content: space-between
      margin: 10px

      &__info
        display: flex
        justify-content: space-between
        align-items: center

      &__icon
        width: 30px
        height: 30px
        margin-right: 20px
        border-radius: 50%
        background-size: cover
        background-position: center
      &__label
        color:#4B3153
        font-size: 14px
        font-weight: bold

      &__extra
        flex-basis: 50%
        display: flex
        justify-content: space-between
        align-items: center
        &-info
          color: #D3D1D3
        &-value
          font-size: 20px
          font-weight: bold
</style>
