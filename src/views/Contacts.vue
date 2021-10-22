<template>
  <section class="contacts-page">
    Your contacts
    <div class="contact-list">
      <pre>
            <p v-for="contact in contacts" :key="contact._id">{{contact}} </p>
        </pre>
    </div>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service";

export default {
  data() {
    return {
      contacts: null,
      filterBy: "",
    };
  },

  methods: {
    async loadContacts() {
      this.contacts = await contactService.query(this.filterBy);
    },
  },

  created() {
    this.loadContacts();
  },
  
};
</script>
