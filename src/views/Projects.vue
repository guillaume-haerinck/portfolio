<template>
  <div class="projects">
    <ProjectSearch/>

    <div class="project-list">
      <Project v-for="(project, index) in projects" 
        :key="'project' + index"
        :name="project.name"
        :description="project.description"
        :date="project.date"
        :logo="project.logo"
        :url="project.url"
        :capture="project.capture"
      />
    </div>

    <div v-if="projects.length == 0">
      <p>No project match !</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import { ProjectCategory, ProjectTag } from '@/store/project-types'
import Project from '@/components/Project.vue'
import ProjectSearch from '@/components/ProjectSearch.vue'
import ProjectsData from '@/assets/projects-data.json'

export default defineComponent({
  name: 'Projects',
  components: {
    Project,
    ProjectSearch
  },
  computed: {
    projects() {
      if (store.state.projectCategories.length === 0 && store.state.projectTags.length === 0)
        return ProjectsData; // No filter, show all
      else if (store.state.projectTags.length === 0) // Filter by category only
        return ProjectsData.filter(project => store.state.projectCategories.includes(project.category));
      else if (store.state.projectCategories.length === 0) // Filter by tag only
        return ProjectsData.filter(project => store.state.projectTags.every((tag: string) => project.tags.includes(tag)));
      else { // All filters
        return ProjectsData.filter(project => 
          store.state.projectCategories.includes(project.category) &&
          store.state.projectTags.every((tag: string) => project.tags.includes(tag))
        );
      }
    }
  }
});
</script>

<style scoped >
.projects {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.project-list {
  display: flex;
  flex-direction: row;
}
</style>
