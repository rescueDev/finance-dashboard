<script>
  export default {
    name: "BaseCard",
    props: {
      data: {
        type: Object,
        default: function() {
          return {};
        },
      },
      activated: {
        type: Boolean,
      },
    },
    data() {
      return {
        freeze: false,
      };
    },
    methods: {
      onClick() {
        this.$emit("onClick", this.data);
      },
    },
    computed: {
      myCustomNumber() {
        return `${this.data.number} ---- Hola my number`;
      },
      selected() {
        return this.activated ? "card--active" : "";
      },
      cardType() {
        return `${this.data.type}`;
      },
    },
  };
</script>
