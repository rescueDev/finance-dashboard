<template>
  <ul class="tabs ">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="tabs__item"
      :class="[item.selected ? 'tabs__item--active' : '']"
      @click="selectTab(item, index)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    props: {
      items: {
        type: Array,
        default: function() {
          return [];
        },
      },
    },

    methods: {
      selectTab(item, index) {
        this.$emit("selectTab", index);
      },
    },
    computed: {
      ...mapGetters({
        current: ["tabs/current"],
      }),
    },
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
