<template>
  <!-- <select class="select" @change="changedOptions" v-model="selected">
    <option disabled value="select one">Please select one</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="index"
      class="select__option"
    >
      {{ option.number }}</option
    >
  </select> -->
  <div class="select">
    <slot></slot>
    <ul class="items-list">
      <li
        class="item"
        v-for="(item, index) in cards"
        :key="index"
        @click="changeCard(item, item.id)"
      >
        <!-- <div class="item__box"> -->
        {{ item.circuit }}
        <!-- </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        selected: 0,
      };
    },
    methods: {
      changeCard(item, cardId) {
        this.$emit("change", cardId);
      },
    },
    computed: {
      cards() {
        return this.items.filter((item) => item.selected === false);
      },
    },
    mounted() {
      console.log(this.items);
    },
  };
</script>

<style lang="sass" scoped>
  .select
    width: 100%
    border: 1px solid red
  .items-list
    border: 1px solid black
    height: 80px
    display: flex
    justify-content: space-around
    align-items: center
    overflow-y: auto

  .item
    border: 1px solid purple
    height: 50px
    font-size: 12px
    width: 80px
</style>
