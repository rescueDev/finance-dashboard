<template>
  <ul class="cards">
    <li
      v-for="(item, index) in sortedItems"
      :key="index"
      class="cards__item"
      :style="deep(index)"
      :class="[`cards__item--index-${index}`]"
    >
      <component
        :activated="item.selected"
        :data="item"
        :is="item.type"
        @onClick="changeCard"
      >
      </component>
    </li>
  </ul>
</template>

<script>
  import visa from "@/components/Cards/Visa/Visa.vue";
  import mastercard from "@/components/Cards/Mastercard/Mastercard.vue";
  import maestro from "@/components/Cards/Maestro/Maestro.vue";
  import americanexpress from "@/components/Cards/AmericanExpress/AmericanExpress.vue";
  export default {
    name: "Cards",
    components: {
      visa,
      mastercard,
      maestro,
      americanexpress,
    },
    props: {
      items: {
        type: Array,
        default: function() {
          return [];
        },
      },
    },
    computed: {
      sortedItems() {
        let index = this.items.findIndex((el) => el.selected);
        let sorted = this.items.unshift(this.items.splice(index, 1)[0]);
        return this.items;
      },
    },
    methods: {
      changeCard(item) {
        if (!item.selected) {
          this.$emit("change", item.id);
        }
      },
      deep(index) {
        return { zIndex: this.items.length - index };
      },
    },
  };
</script>

<style lang="sass" scoped>

  .cards
    display: flex
    align-items: center
    width: 80%
    height: 200px

    &__item
      display: flex
      transition: .5s ease-in-out
      border-radius: 8px
      margin-left: -180px
      animation: .4s cubic-bezier(.25, .25, .25, 1.25) both fadeIn

      &:hover
        transition: .5s ease-in
        cursor: pointer
        transform: translateY(-25%) rotate(-14deg) !important


      @for $i from 1 through 10
        &--index-#{$i}
          animation-delay: $i * .6s

      &:first-child
        pointer-events: auto
        margin-left: 0
        &:hover
          transform: translateY(0) !important

    @keyframes fadeIn
      0%
        opacity: 0
        transform: translateX(50%) scale(0) rotateZ(-60deg)
      100%
        opacity: 1
        transform: translateX(0) scale(1) rotateZ(0deg)
</style>
