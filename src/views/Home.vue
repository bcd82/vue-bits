<template>
  <section class="home">
    <div v-if="user" class="user-info flex align-center">
      <img :src="`https://robohash.org/${user.username}.png`" />
      <div class="flex column">
        <p>Hi {{ user.username }}</p>
        <p>Balance:</p>
        <p>
          {{ user.balance }} BITS <span>( ${{ getBtcToUsd }} )</span>
        </p>
      </div>
      <button @click="logout">logout</button>
    </div>
    <div v-else>
      <form @submit.prevent="login" class="login flex column">
        <p>Login:</p>
        <input type="text" v-model="creds.username" placeholder="username" />
        <input
          type="password"
          v-model="creds.password"
          placeholder="password"
        />
        <button>log me in</button>
      </form>
    </div>
    <MoveList v-if="user" :user="user" />
  </section>
</template>

<script>
import MoveList from "../cmps/MoveList.vue";
export default {
  data() {
    return {
      creds: {
        username: "",
        password: "",
      },
    };
  },
  name: "Home",
  methods: {
    loadUser() {
      this.$store.dispatch({ type: "loadUser" });
    },
    getRate() {
      this.$store.dispatch({ type: "getMarketPrice" });
    },
    logout() {
      this.$store.dispatch({ type: "logout" });
    },
    login() {
      this.$store.dispatch({ type: "login", creds: this.creds });
    },
  },
  computed: {
    getBtcToUsd() {
      return (this.user.balance / this.rate).toLocaleString("en-US");
    },
    user() {
      return this.$store.getters.loggedInUser;
    },
    rate() {
      return this.$store.getters.rate;
    },
  },
  created() {
    this.loadUser();
    this.getRate();
  },
  components: { MoveList },
};
</script>
