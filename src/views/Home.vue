<template>
  <section class="home">
    <div v-if="user" class="user-info flex align-center">
      <img  :src="`https://robohash.org/${user.username}.png`" />
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
import { userService } from "../services/user.service";
import { getRate } from "../services/bitcoin.service";
import MoveList from "../cmps/MoveList.vue";
export default {
  data() {
    return {
      user: null,
      rate: null,
      creds: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loadUser() {
      try {
        this.user = await userService.getUser();
      } catch (err) {
        console.log("error", err);
      }
    },
    async getRate() {
      try {
        this.rate = await getRate();
      } catch (err) {}
    },
    async logout() {
      userService.logout();
      this.user = null;
    },
    async login() {
      try{ 
        const user = await userService.login(this.creds);
        this.user = user;
      }
      catch(err){
        console.log('user doesnt exist',err)
      }
    },
  },
  computed: {
    getBtcToUsd() {
      return (this.user.balance / this.rate).toLocaleString("en-US");
    },
  },
  created() {
    this.loadUser();
    this.getRate();
  },
  components: { MoveList },
};
</script>
