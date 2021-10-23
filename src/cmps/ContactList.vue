<template>
  <ul class="contact-list flex column align-center">
    <h2>Contacts</h2>
    <router-link to="/contacts/edit"><button>Add new +</button></router-link>
    <ContactPreview
      v-for="contact in contacts"
      :key="contact._id"
      :contact="contact"
    />
  </ul>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: ["contacts"],
  components: { ContactPreview },
};
</script>
