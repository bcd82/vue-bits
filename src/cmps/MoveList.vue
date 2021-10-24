<template>
  <div v-if="moves" class="move-list">
    <h2>Recent Activity</h2>
    <MovePreview
      v-for="move in user.moves"
      :key="move.id"
      :move="move"
      :user="user"
    />
  </div>
</template>

<script>
import MovePreview from "./MovePreview.vue";
export default {
  data() {
    return {
      moves: this.user.moves,
    };
  },
  props: ["user"],
  components: { MovePreview },
};
</script>
