<template>
  <div class="main-view">
    <header >
      <Header />
    </header>
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
