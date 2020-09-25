<template>
  <div class="project-search">
    <p>Search project</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectSearch'
});
</script>

<style scoped>
.project-search {
  background-color: black;
  color: white;
  left: 0;
  min-height: 100vh;
}
</style>
