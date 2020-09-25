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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Project from '@/components/Project.vue';
import ProjectSearch from '@/components/ProjectSearch.vue';

import ProjectsData from '@/assets/projects-data.json';

@Component({
  components: {
    Project,
    ProjectSearch
  }
})
export default class Projects extends Vue {
  projects = ProjectsData;
}
</script>

<style scoped lang="css">
.projects {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.project-list {
  display: flex;
  flex-direction: row;
}
</style>
