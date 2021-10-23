<template>
  <div class="main-view">
      <Header />
    <router-view />
    <footer />
  </div>
</template>

<script>
import Header from './cmps/Header.vue'
export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style></style>
