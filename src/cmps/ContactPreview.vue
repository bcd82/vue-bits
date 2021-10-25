<template>
  <li class="contact-preview flex align-center" @click="goToPage">
    <img :src="`https://robohash.org/${contact.name}`" />
    <div class="info">
      <p><strong>{{ contact.name }}</strong></p>
      <p>Balance : {{contact.balance}}</p>
      <p>(${{balanceToUsd}})</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["contact"],
  methods: {
    goToPage() {
      this.$router.push(`/contacts/${this.contact._id}`)
    }
  },
  computed: {
    balanceToUsd() { 
      const rate = this.$store.getters.rate 
      return (this.contact.balance / rate).toLocaleString('en-US')
    }
  }
};
</script>
