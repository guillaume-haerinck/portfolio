<template>
  <div class="projects">
    <ProjectSearch/>

    <p v-for="(tag, index) in temp" :key="index">
      test
    </p>

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
  data() {
    return {
      projects: ProjectsData
    }
  },
  computed: {
    temp() {
      return store.state.projectTags
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
