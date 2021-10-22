<template>
  <div v-if="user">
    <p>Hi {{ user.username }}</p>
    <p>Your Balance</p>
    <p>BITS: {{ user.balance }}  <span>( ${{getBtcToUsd}} )</span></p>
  </div>
</template>

<script>
import { getUser } from "../services/user.service";
import { getRate } from "../services/bitcoin.service";
export default {
  data() {
    return {
      user: null,
      rate:null
    };
  },
  methods: {
    async loadUser() {
      try {
        this.user = await getUser();
      } catch (err) {
        console.log('error',err);
      }
    },
    async getRate() {
        try {
            this.rate = await getRate();
            console.log(this.rate)
        }
        catch (err) {

        }
    }
  },
  computed: {
      getBtcToUsd() {
          return (this.user.balance / this.rate).toLocaleString()
      }
  },
  created() {
    this.loadUser();
    this.getRate();
  },
};
</script>
