<template>
  <div class="project-search">
    <p>Search project</p>
    <Tag v-for="(tag, index) in tags"
      :key="index"
      :name="tag"
      v-on:click="toggleTag(tag)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from './Tag.vue'
import { store } from '@/store'
import { ProjectTag, ProjectCategory, ProjectTags, ProjectCategories } from '@/store/project-types'

export default defineComponent({
  name: 'ProjectSearch',
  components: {
    Tag
  },
  data() {
    return {
      tags: ProjectTags,
      categories: ProjectCategories
    }
  },
  methods: {
    toggleTag(tag: string) {
      const tagIndex = store.state.projectTags.indexOf(tag);
      if (tagIndex === -1)
        store.commit('addProjectTag', tag);
      else
        store.commit('removeProjectTag', tagIndex);
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
