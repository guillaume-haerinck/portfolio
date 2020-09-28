<template>
  <div class="project-search">
    <p>Search project</p>
    <button v-on:click="doSearch" >Click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import { ProjectTag, ProjectCategory } from '@/store/project-types'

export default defineComponent({
  name: 'ProjectSearch',
  methods: {
    doSearch() {
      console.log("Hello");
      store.commit('setProjectTags', [
        ProjectTag.OPENGL,
        ProjectTag.CPP
      ]);
      console.log(store.state.projectTags);
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
