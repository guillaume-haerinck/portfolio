<template>
  <div class="landing">
    <div id="first-screen">
      <h1 class="backgrounded left">Hello I'm Guillaume,<br>a software engineer student <br>based in Paris.</h1>
      <p id="description">Exploring computer graphics, I'm making projects related to realtime rendering, data-oriented design, web and user interface development.</p>

      <div id="links">
        <p><a id="linkedin" href="/">linkedin</a></p>
        <p><a id="vimeo" href="/">vimeo</a></p>
        <p><a id="cv" href="/">cv</a></p>
        <p><a id="github" href="/">github</a></p>
      </div>
    </div>

    <div class="separator">
      <h3 class="backgrounded left">A selection of sofwares I worked on.</h3>
    </div>

    <Project v-for="(project, index) in projects" 
      :key="index"
      :name="project.name"
      :description="project.description"
      :date="project.date"
      :logo="project.logo"
      :url="project.url"
      :capture="project.capture"
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
#first-screen {
  min-height: 100vh;
  display: grid;
  align-content: center;
}

.separator {
  display: grid;
}

#description {
  max-width: 1000px;
  padding-left: var(--left-decals);
}

#links {
  margin: 10vh 0;
  display: inline-grid;
  grid-auto-flow: column;
  justify-content: left;

  p {
    margin: 0 0.5em;

    &:first-of-type {
      margin-left: var(--left-decals);
    }
  }

  a {
    text-decoration: none;
    color: black;
    padding-bottom: 3px;
  }

  #linkedin {
    border-bottom: 4px solid #0077b5;

    &:hover {
      color: #0077b5;
    }
  }

  #vimeo {
    border-bottom: 4px solid #00adef;

    &:hover {
      color: #00adef;
    }
  }

  #cv {
    border-bottom: 4px solid violet;

    &:hover {
      color: violet;
    }
  }

  #github {
    border-bottom: 4px solid grey;

    &:hover {
      color: grey;
    }
  }
}

</style>
