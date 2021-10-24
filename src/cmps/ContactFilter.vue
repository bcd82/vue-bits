<template>
  <div class="filter flex column align-center">
    <input class="input" type="search" v-model="thisFilterBy" placeholder="contact name" @input="setFilter"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      thisFilterBy: this.filterBy
    };
  },
  methods:{
      setFilter(){
          this.$emit('filterChange',this.thisFilterBy);
      }
  },
  props: ["filterBy"],
};
</script>

<style scoped lang="scss">
.input {
    height:25px;
    padding:5px 10px;
    margin-bottom:10px;
}

</style>
