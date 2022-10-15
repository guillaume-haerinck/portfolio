<template>
  <div class="landing readable">
    <div class="fullheight" id="first-screen">
      <h1 class="backgrounded left orange">Hello I'm Guillaume,<br>a Tools engineer<br>based in Paris.</h1>
      <p id="description">Currently working at Ubisoft on the Snowdrop game engine, and making some open-source contribution when the time is bright 🎶</p>

      <div id="links">
        <p><a id="cv" href="https://www.guillaumehaerinck.com/cv-en.pdf" target="_blank">resume</a></p>
        <p><a id="linkedin" href="https://www.linkedin.com/in/guillaumehaerinck/" target="_blank">linkedin</a></p>
        <p><a id="github" href="https://github.com/guillaume-haerinck" target="_blank">github</a></p>
      </div>
    </div>

    <div class="fullheight" id="presentation">
      <div class="oblique-title-container">
        <div class="oblique-black"></div>
        <h1 class="title">ABOUT ME</h1>
        <div class="oblique-black"></div>
      </div>

      <div class="presentation-element wrap-reverse">
        <div class="backgrounded presentation-text green">
          <p>Great ideas are constantly shared accross the game development community so I do my best to keep updated and use these in my projects</p>
        </div>

        <div class="presentation-icon">
          <img src="img/analysis.png" alt="Magnifying glass icon">
        </div>
      </div>

      <div class="presentation-element">
        <div class="presentation-icon">
          <img src="img/artist.png" alt="Paint icon">
        </div>

        <div class="backgrounded presentation-text blue">
          <p>I have an artistic knowledge which is a big help when I work on the visuals and collaborate with artists</p>
        </div>
      </div>

      <div class="presentation-element wrap-reverse">
        <div class="backgrounded presentation-text red">
          <p>Performance is crucial to me which is why I always try to get closer to the metal and see how things really works</p>
        </div>

        <div class="presentation-icon">
          <img src="img/milometer.png" alt="Meter icon">
        </div>
      </div>
    </div>

    <div class="fullheight-min" id="last-projects">
      <div class="oblique-title-container">
        <div class="oblique-black"></div>
        <h1 class="title">LAST PROJECTS</h1>
        <div class="oblique-black"></div>
      </div>

      <div id="last-projects-container">
        <Project v-for="project in projects" 
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
      projects: [Projects["evil-age"], Projects["sakari"]]
    }
  }
});
</script>

<style scoped >
/* First screen */

#first-screen {
  display: grid;
  align-content: center;
  justify-self: center;
}

#description {
  max-width: 1000px;
  padding-left: var(--default-padding);
}

#links {
  margin: 10vh 0;
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

.presentation-element {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.presentation-element p {
  margin: 0;
}

.wrap-reverse {
  flex-wrap: wrap-reverse;
}

.presentation-text {
  max-width: 600px;
}

.presentation-icon {
  max-width: 125px;
}

.presentation-icon img {
  width: 100%;
  margin: 10px;
}

/* Last projects */

#last-projects {
  display: grid;
}

#last-projects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

</style>
