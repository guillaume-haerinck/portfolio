<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hello I'm Guillaume, a software engineer student based in Paris</h1>
    <p>Exploring computer graphics, I'm making projects related to realtime rendering, data-oriented design, web and user interface development</p>

    <div>
      <p><a>linkedin</a></p>
      <p><a>vimeo</a></p>
      <p><a>cv</a></p>
      <p><a>github</a></p>
    </div>

    <h2>A selection of sofwares I worked on</h2>

    <p>{{ projects[0].description }}</p>


    <Project v-for="(project, index) in projects" 
      v-bind:key="index"
      v-bind:description="project.description"
      v-bind:date="project.date"
      v-bind:logo="project.logo"
      v-bind:url="project.url"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Project from '@/components/Project.vue';
import ProjectData from '@/assets/project-data.json';

@Component({
  components: {
    Project
  }
})
export default class App extends Vue {
  // Data
  projects = ProjectData;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
