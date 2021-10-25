<template>
  <section
    class="contact-details flex column align-center justify-center"
    v-if="contact"
  >
    <img :src="`https://robohash.org/${contact.name}`" />
    <strong
      ><p>{{ contact.name }}</p></strong
    >
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
    <p>balance: {{ contact.balance }}</p>
    <p>${{ balanceToUsd}}</p>
    <div class="actions flex">
      <router-link to="/contacts">
        <button>back</button>
      </router-link>
      <router-link :to="`/contacts/edit/${contact._id}`">
        <button>edit</button>
      </router-link>
      <button @click="toggleTransfer">
        {{ !isTransfer ? "Transfer" : "Close" }}
      </button>
    </div>
    <div v-if="isTransfer" class="transfer-box fade-in">
      <form @submit.prevent="transfer">
        <input
          v-model="transferAmount"
          type="number"
          required
          placeholder="Amount to transfer"
        />
        <button>send bits</button>
      </form>
    </div>
    <p>{{ transferStatus }}</p>
    <MoveList v-if="user" :user="getFilteredMoves" />
  </section>
</template>
<script>
import { contactService } from "../services/contact.service";
import { transferBits } from "../services/bitcoin.service";
import MoveList from "../cmps/MoveList.vue";
export default {
  data() {
    return {
      contact: null,
      transferAmount: 0,
      isTransfer: false,
      transferStatus: "",
    };
  },
  created() {
    this.loadContact();
  },
  methods: {
    async loadContact() {
      const { contactId } = this.$route.params;
      if (!contactId) return;
      this.contact = await contactService.getById(contactId);
    },
    async transfer() {
      if (this.transferAmount <= 0) return;
      try {
        await transferBits(this.contact._id, this.transferAmount);
        this.transferStatus = "Complete";
        this.$store.dispatch({type:'loadUser'})
        this.toggleTransfer();
        this.transferAmount = 0;
      } catch (err) {
        this.transferStatus = "Insufficient funds";
      }
    },
    toggleTransfer() {
      this.isTransfer = !this.isTransfer;
    },
  },
  computed: {
    getFilteredMoves() {
      const user = { ...this.user };
      user.moves = user.moves.filter(
        (move) => move.contact._id === this.contact._id
      );
      return user;
    },
    user() {
      return this.$store.getters.loggedInUser;
    },
      balanceToUsd() { 
      const rate = this.$store.getters.rate 
      console.log(rate)
      return (this.contact.balance / rate).toLocaleString('en-US')
    }
  },
  components: {
    MoveList,
  },
  watch: {
    user(newVal, oldVal) {
      console.log(newVal,oldVal)
      if (newVal.moves.length !== oldVal.moves.length) this.loadContact();
    },
  },
};
</script>
