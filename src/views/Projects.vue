<template>
  <div class="projects fullheight-min" :class="{ 'projects-with-search' : showSearchMenu }">
    <ProjectSearch v-if="showSearchMenu" />

    <div class="project-list" v-if="projects.length != 0">
      <Project v-for="project in projects" 
        :key="'project-' + project.name"
        :project="project"
      />
    </div>

    <div class="no-match" v-else>
      <i class="material-icons">find_in_page</i><p>No project match !</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import Project from '@/components/Project.vue'
import ProjectSearch from '@/components/ProjectSearch.vue'
import ProjectsData from '@/assets/projects-data.json'
import { ProjectCategory } from '@/store/project-types'

export default defineComponent({
  name: 'Projects',
  components: {
    Project,
    ProjectSearch
  },
  computed: {
    showSearchMenu() {
      return store.state.showSearchMenu;
    },
    projects() {
      let data = Object.values(ProjectsData);
      if (store.state.selectedProjectCategories.length > 0)
      {
        data = data.filter(project => store.state.selectedProjectCategories.includes(project.category as ProjectCategory));
      }

      if (store.state.selectedProjectTags.length > 0)
      {
        data = data.filter(project => store.state.selectedProjectTags.every((tag: string) => project.tags.includes(tag)));
      }

      return data;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
});
</script>

<style scoped >
.projects {
  display: grid;
}

.projects-with-search {
  grid-template-columns: calc(var(--search-width) + 5px) 1fr;
}

.project-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.no-match {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.no-match .material-icons {
  font-size: 3em;
}

@media screen and (max-width: 650px) {
  .projects-with-search {
    display: unset;
  }
}
</style>
