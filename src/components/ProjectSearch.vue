<template>
  <div class="project-search">
    <p>Search project</p>
    <button v-on:click="doSearch" >Click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'

export default defineComponent({
  name: 'ProjectSearch',
  methods: {
    doSearch() {
      console.log("Hello");
      store.commit('increment');
      console.log(store.state.count);
    }
  }
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
