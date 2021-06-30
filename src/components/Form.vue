<template>
  <div class="form">
    <div class="input-group">
      <label class="label-input" for="number">Card Number</label>
      <input
        v-model="card.number"
        class="input"
        type="text"
        name="number"
        id="number"
        placeholder="Card number"
      />
    </div>
    <div class="input-group">
      <label class="label-input" for="expirationDate">Expiration Date</label>
      <input
        v-model="card.expirationDate"
        class="input"
        type="month"
        name="expirationDate"
        id="expirationDate"
        placeholder="Expiration"
      />
    </div>
    <div class="input-group">
      <label class="label-input" for="cvc">Cvc</label>
      <input
        v-model="card.cvc"
        class="input"
        type="text"
        name="cvc"
        id="cvc"
        placeholder="CVC"
      />
    </div>
    <div class="input-group">
      <label class="label-input" for="circuit">Circuit</label>
      <select v-model="card.circuit" name="circuit" id="circuit">
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Maestro">Maestro</option>
        <option value="American Express">American Express</option>
      </select>
    </div>
    <button @click="addForm" class="btn">Add</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        card: {
          id: undefined,
          number: "",
          expirationDate: "",
          cvc: "",
          circuit: "",
          balance: 0,
          selected: false,
        },
      };
    },
    methods: {
      addForm() {
        let card = { ...{}, ...this.card };
        this.$emit("form-submit", card);
      },
    },
    computed: {
      cardLength() {
        return this.$store.state.account.cards.length;
      },
    },
  };
</script>

<style lang="sass" scoped>
  .form
    width: 200px

  .input-group
    margin: 10px 0

  .label-input
    display: block
    margin-bottom: 5px

  .input, select
    width: 100%
    border: 1px solid #DCD6DC
    border-radius: 8px
    padding: 5px

  .btn
    margin-top: 20px
    border: none
    background: #4C3153
    padding: 8px
    color: white
    border-radius: 8px
</style>
