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
          <Toggler icon="fas fa-bell" type="i"></Toggler>
        </template>

        <template #account>
          <Account :card="card">
            <Title title="Dashboard"></Title>
            <template #toggle>
              <Toggler icon="fas fa-plus" type="i"></Toggler>
            </template>
          </Account>
        </template>

        <template #transactions>
          <Transactions :items="transactions">
            <Title title="Transactions"></Title>
            <template #toggler>
              <Toggler
                @click-toggle="showAll"
                text="view all"
                type="span"
              ></Toggler>
            </template>
          </Transactions>
        </template>
      </Main>
    </template>

    <template #right>
      <Summary :card="card" :profile="profile">
        <Toggler icon="fas fa-cog" type="i"></Toggler>
        <template #tabs>
          <Tabs :items="tabs"> </Tabs>
        </template>
        <template #title>
          <Title title="Activity"></Title>
        </template>
        <template #toggler>
          <Toggler text="view all" type="span"> </Toggler>
        </template>
        <template #chart>
          <Chart :transactions="transactions"> </Chart>
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
    },
    data() {
      return {
        menu: this.$store.state.navigation.navigation,
        tabs: this.$store.state.navigation.tabs,
        card: this.$store.state.account.account.card,
        transactions: this.$store.state.account.account.card.transactions,
        collapse: this.$store.state.account.account.card.collapse,
        profile: this.$store.state.account.account.profile,
      };
    },
    methods: {
      showAll() {
        console.log("emit");
        this.$store.commit("account/collapse");
      },
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
    align-items: center
    justify-content: center
    height: 100vh
</style>
