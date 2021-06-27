<template>
  <ul class="tabs ">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="tabs__item"
      :class="[indexSelected === index ? 'tabs__item--active' : '']"
      @click="selectTab(index)"
    >
      {{ item.label }}
    </li>
  </ul>
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
    data() {
      return {
        indexSelected: 0,
      };
    },
    methods: {
      selectTab(index) {
        this.indexSelected = index;
      },
    },
    computed: {},
  };
</script>

<style lang="sass" scoped>
  .tabs
      display: flex
      justify-content: center
      width: 100%
      &__item
        padding: 10px 30px
        font-size: 14px
        border-radius: 20px
        color: #EC6812
        &:hover
          cursor: pointer

        &--active
          background: #EC6812
          color: white
</style>
