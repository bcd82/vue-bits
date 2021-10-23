<template>
  <section class="contacts-page">
    <ContactFilter :filterBy="filterBy"  @filterChange="setFilter"/>
    <ContactList :contacts="contacts"/>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service";
import ContactList from "../cmps/ContactList.vue"
import ContactFilter from "../cmps/ContactFilter.vue"

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
    async setFilter(val){
      this.filterBy = val;
      this.loadContacts();
    }
  },

  created() {
    this.loadContacts();
  },
  components : {ContactList,ContactFilter}
};
</script>
