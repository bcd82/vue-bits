<template>
  <section v-if="contacts" class="contacts-page">
    <ContactFilter :filterBy="filterBy"  @filterChange="setFilter"/>
    <ContactList :contacts="contacts"/>
  </section>
</template>

<script>
import ContactList from "../cmps/ContactList.vue"
import ContactFilter from "../cmps/ContactFilter.vue"

export default {
  data() {
    return {
      // contacts: null,
      filterBy: "",
    };
  },

  methods: {
    async loadContacts() {
      this.$store.dispatch({ type: "loadContacts", filterBy:this.filterBy});
    },
    async setFilter(val){
      this.filterBy = val;
      this.loadContacts();
    }
  },
  computed:{
    contacts(){
      return this.$store.getters.contacts;
    }
  },
  created() {
    this.loadContacts();
  },
  components : {ContactList,ContactFilter}
};
</script>
