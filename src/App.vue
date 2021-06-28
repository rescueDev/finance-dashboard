<template>
  <!-- <Container> -->
  <Dashboard>
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
          <Account :card="card">
            <Title title="Dashboard"></Title>
            <template #toggle>
              <!-- <Toggler icon="fas fa-plus" type="i"></Toggler> -->
              <Toggler>
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
      <Summary :card="card" :profile="profile">
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
          <!-- <Chart :transactions="transactions"> </Chart> -->
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
  import { mapState } from "vuex";
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
    },
    data() {
      return {
        toggle: false,
        max: 3,
      };
    },
    methods: {
      showAll() {
        console.log("emit toggler");
        this.toggle = !this.toggle;
      },
      selectTab(index) {
        this.$store.commit("tabs/switch", index);
      },
      fillChart() {},
    },
    computed: {
      transactionsWithLimit() {
        return this.toggle
          ? this.transactions
          : this.transactions.filter((el, index) => {
              if (index < this.max) {
                return el;
              }
            });
      },
      currentTransactionType() {
        return this.$store.getters["tabs/current"][0].type;
      },
      menu() {
        return this.$store.state.navigation.menu;
      },
      tabs() {
        return this.$store.state.tabs.items;
      },
      card() {
        return this.$store.state.account.card;
      },
      transactions() {
        return this.$store.state.transactions.items;
      },
      // collapse() {
      //   return this.$store.state.account.card.collapse;
      // },
      profile() {
        return this.$store.state.account.profile;
      },
      transactionData() {
        return this.transactions.filter(
          (el) => el.type === this.currentTransactionType
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
              backgroundColor: "rgba(255, 159, 64, 0.2)",
              borderColor: "rgba(255, 159, 64, 0.2)",
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
      console.log(this.$store.getters);
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
