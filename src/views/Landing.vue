<template>
  <div class="landing readable">
    <div id="first-screen">
      <h1 class="backgrounded left orange">Hello I'm Guillaume,<br>a C++ Software Engineer<br>originating from France</h1>
      <p id="description">Currently working at Frima with Unreal Engine and making some open-source contribution when the sun is bright 🎶</p>

      <div id="links">
        <p><a id="cv" href="https://www.guillaumehaerinck.com/resume.pdf" target="_blank">resume</a></p>
        <p><a id="linkedin" href="https://www.linkedin.com/in/guillaumehaerinck/" target="_blank">linkedin</a></p>
        <p><a id="github" href="https://github.com/guillaume-haerinck" target="_blank">github</a></p>
      </div>
    </div>

    <div class="last-projects">
      <div class="oblique-title-container">
        <div class="oblique-black"></div>
        <h1 class="title">PROFESSIONAL HIGHLIGHTS</h1>
        <div class="oblique-black"></div>
      </div>

      <div class="last-projects-container">
        <Project v-for="project in professionalProjects" 
          :key="'project-' + project.name"
          :project="project"
        />
      </div>
    </div>

    <div class="last-projects">
      <div class="oblique-title-container">
        <div class="oblique-black"></div>
        <h1 class="title">HOBBY PROJECTS</h1>
        <div class="oblique-black"></div>
      </div>

      <div class="last-projects-container">
        <Project v-for="project in hobbyProjects" 
          :key="'project-' + project.name"
          :project="project"
        />
      </div>

      <router-link class="button" to="/projects">
        More
        <i class="material-icons">arrow_right_alt</i>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Project from '@/components/Project.vue'

import Projects from '@/assets/projects-data.json'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Landing',
  components: {
    Project
  },
  data() {
    return {
      professionalProjects: [Projects["sparks-of-hope"], Projects["scanrig"]],
      hobbyProjects: [Projects["open-engine"], Projects["harmless-delivery"]]
    }
  }
});
</script>

<style scoped >

.landing {
  margin-bottom: 10px;
}

/* First screen */

#first-screen {
  display: grid;
  align-content: center;
  justify-self: center;
  margin: 50px 0;
}

#description {
  max-width: 1000px;
  padding-left: var(--default-padding);
}

#links {
  padding-left: 5px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

#links p {
    margin: 0 0.5em;
}

#links a {
  text-decoration: none;
  color: black;
  padding-bottom: 3px;
}

#linkedin {
  border-bottom: 4px solid #0077b5;
}

#linkedin:hover {
  color: #0077b5;
}

#vimeo {
  border-bottom: 4px solid #00adef;
}

#vimeo:hover {
  color: #00adef;
}

#cv {
  border-bottom: 4px solid violet;
}

#cv:hover {
  color: violet;
}

#github {
  border-bottom: 4px solid grey;
}

#github:hover {
  color: grey;
}

/* Presentation */

#presentation {
  display: grid;
}

/* Last projects */

.last-projects {
  display: grid;
}

.last-projects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

@media screen and (max-width: 730px) {
  #first-screen {
    margin: 25px 0;
  }
}

</style>
