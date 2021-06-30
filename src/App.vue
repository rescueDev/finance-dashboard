<template>
  <!-- <Container> -->
  <Dashboard>
    <template #modal>
      <transition name="fade">
        <Modal v-if="modalToggle">
          <template #title>
            <Title title="Add new credit card"></Title>
          </template>
          <template #toggle>
            <Toggler @click-toggle="closeModal">
              <i class="fas fa-times"></i>
            </Toggler>
          </template>
          <template #center>
            <Form @form-submit="addCC"></Form>
          </template>
        </Modal>
      </transition>
    </template>
    <template #left>
      <Sidebar>
        <template #logo>
          <Logo></Logo>
        </template>
        <template #navigation>
          <Navigation :menu="menu"> </Navigation>
        </template>
      </Sidebar>
    </template>
    <template #center>
      <Main>
        <template #search>
          <Search></Search>
        </template>
        <template #icon>
          <!-- <Toggler icon="fas fa-bell" type="i"></Toggler> -->
          <Toggler>
            <i class="toggle-icon fas fa-bell"></i>
          </Toggler>
        </template>

        <template #account>
          <Account :card="selectedCard">
            <Title title="Dashboard"></Title>
            <template #select>
              <Select :items="cards" @change="changeCard"></Select>
            </template>
            <template #toggle>
              <!-- <Toggler icon="fas fa-plus" type="i"></Toggler> -->
              <Toggler @click-toggle="openModal">
                <i class="toggle-icon fas fa-plus"></i>
              </Toggler>
            </template>
          </Account>
        </template>

        <template #transactions>
          <Transactions :items="transactionsWithLimit">
            <Title title="Transactions"></Title>
            <template #toggler>
              <!-- <Toggler
                @click-toggle="showAll"
                text="view all"
                type="span"
              ></Toggler> -->
              <Toggler @click-toggle="showAll">
                <span
                  class="toggle-text"
                  v-text="toggle ? 'collapse' : 'expand'"
                ></span>
              </Toggler>
            </template>
          </Transactions>
        </template>
      </Main>
    </template>

    <template #right>
      <Summary :card="selectedCard" :profile="profile">
        <!-- <Toggler icon="fas fa-cog" type="i"></Toggler> -->
        <Toggler>
          <i class="toggle-icon fas fa-cog"></i>
        </Toggler>

        <template #tabs>
          <Tabs :items="tabs" @selectTab="selectTab"></Tabs>
        </template>
        <template #title>
          <Title title="Activity"></Title>
        </template>
        <template #toggler>
          <!-- <Toggler text="view all" type="span"></Toggler> -->
          <Toggler>
            <span class="toggle-text">Month</span>
          </Toggler>
        </template>
        <template #chart>
          <Chart :chart-data="dataChart"></Chart>
        </template>
      </Summary>
    </template>
  </Dashboard>
  <!-- </Container> -->
</template>

<script>
  import Dashboard from "@/components/Dashboard.vue";
  import Sidebar from "@/components/Sidebar.vue";
  import Logo from "@/components/Logo.vue";
  import Navigation from "@/components/Navigation.vue";
  import Main from "@/components/Main.vue";
  import Search from "@/components/Search.vue";
  import Account from "@/components/Account.vue";
  import Icon from "@/components/Icon.vue";
  import Title from "@/components/Title.vue";
  import Transactions from "@/components/Transactions.vue";
  import Summary from "@/components/Summary.vue";
  import Toggler from "@/components/Toggler.vue";
  import Chart from "@/components/Chart.vue";
  import Tabs from "@/components/Tabs.vue";
  import LineChart from "@/components/LineChart.vue";
  import Modal from "@/components/Modal.vue";
  import Form from "@/components/Form.vue";
  import Select from "@/components/Select.vue";
  export default {
    name: "App",
    components: {
      Dashboard,
      Sidebar,
      Logo,
      Navigation,
      Main,
      Search,
      Icon,
      Account,
      Title,
      Transactions,
      Summary,
      Toggler,
      Chart,
      Tabs,
      LineChart,
      Modal,
      Form,
      Select,
    },
    data() {
      return {
        toggle: false,
        max: 3,
        modalToggle: false,
      };
    },
    methods: {
      showAll() {
        this.toggle = !this.toggle;
      },
      selectTab(index) {
        this.$store.commit("tabs/switch", index);
      },
      openModal() {
        this.modalToggle = true;
      },
      closeModal() {
        this.modalToggle = false;
      },
      addCC(card) {
        // console.log(card);
        this.modalToggle = false;
        this.$store.commit("account/addCard", card);
      },
      changeCard(index) {
        // console.log(index);
        this.$store.commit("account/changeCard", index);
      },
    },
    computed: {
      transactionsWithLimit() {
        return this.toggle
          ? this.transactionsCard
          : this.transactionsCard.filter((el, index) => {
              if (index < this.max) {
                return el;
              }
            });
      },

      menu() {
        return this.$store.state.navigation.menu;
      },
      tabs() {
        return this.$store.state.tabs.items;
      },
      cards() {
        return this.$store.state.account.cards;
      },
      selectedCard() {
        return this.cards.filter((card) => card.selected === true)[0];
      },

      profile() {
        return this.$store.state.account.profile;
      },

      //transactions computed

      currentTransactionType() {
        return this.$store.getters["tabs/current"][0].type;
      },
      transactions() {
        return this.$store.state.transactions.items;
      },
      transactionData() {
        return this.transactionsCard.filter(
          (el) => el.type === this.currentTransactionType
        );
      },
      transactionsCard() {
        return this.$store.state.transactions.items.filter(
          (tr) => tr.card_id === this.selectedCard.id
        );
      },
      dataChart() {
        let labels = this.transactionData.map((el) => {
          return el.date;
        });
        let data = this.transactionData.map((el) => {
          return el.amount;
        });
        // return this.$store.getters["tabs/current"][0];
        return {
          labels: labels,
          datasets: [
            {
              label: "# of Votes",
              data: data,
              backgroundColor: "#F8DBCA",
              borderColor: "#ec6813",
              borderWidth: 1,
            },
          ],
        };
      },

      // ...mapState({
      //   account: (state) => state.profile,
      //   navigation: (state) => state.navigation,
      // }),
    },

    mounted() {
      console.log("This selectedCard computed: ", this.selectedCard);
    },
  };
</script>

<style lang="sass">
  @import "@/assets/sass/app.sass"
  @import "@/assets/sass/layout/reset.sass"
  body
    font-family: 'Nunito Sans', sans-serif
    background: #F3DECE
    display: flex
    height: 100vh
    align-items: center
    justify-content: center

    .toggle-icon
      color: #DCD6DC
      font-size: 25px
      width: 40px
    .toggle-text
      color: #EC6812
      font-size: 14px
</style>
