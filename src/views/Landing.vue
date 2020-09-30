<template>
  <div class="landing">
    <div class="fullheight" id="first-screen">
      <h1 class="backgrounded left">Hello I'm Guillaume,<br>a software engineer student <br>based in Paris.</h1>
      <p id="description">Exploring computer graphics, I'm making projects related to realtime rendering, data-oriented design, web and user interface development.</p>

      <div id="links">
        <p><a id="linkedin" href="https://www.linkedin.com/in/guillaumehaerinck/">linkedin</a></p>
        <p><a id="vimeo" href="https://vimeo.com/guillaumehaerinck">vimeo</a></p>
        <p><a id="cv" href="https://www.guillaumehaerinck.com/cv-en.pdf">cv</a></p>
        <p><a id="github" href="https://github.com/guillaume-haerinck">github</a></p>
      </div>
    </div>

    <div class="fullheight" id="presentation">
      <div class="oblique-title-container">
        <div class="oblique-black"></div>
        <h1 class="title">ABOUT ME</h1>
        <div class="oblique-black"></div>
      </div>

      <div class="presentation-element wrap-reverse">
        <div class="backgrounded presentation-text">
          <p>While I focus on graphics and software programming, I have an artistic background which allows me to understand the needs of many fields involved in a creative pipeline</p>
        </div>

        <div class="presentation-icon">
          <img src="img/meeting.png" alt="Meeting icon">
        </div>
      </div>

      <div class="presentation-element">
        <div class="presentation-icon">
          <img src="img/business-and-finance.png" alt="Business icon">
        </div>

        <div class="backgrounded presentation-text">
          <p>I do my best to keep up to date with the innovations of the industry. Writing documentation, blog posts and tutorials is also something I really like</p>
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
        <Project v-for="(project, index) in projects" 
          :key="'project' + index"
          :name="project.name"
          :year="project.year"
          :url="project.url"
          :description="project.description"
          :capture="project.capture"
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
      projects: [Projects[1], Projects[0]]
    }
  }
});
</script>

<style scoped >
.landing {
  padding: 0 50px;
  display: grid;
  justify-self: center;
  max-width: 950px;
}

/* First screen */

#first-screen {
  display: grid;
  align-content: center;
  justify-self: center;
}

#description {
  max-width: 1000px;
  padding-left: var(--left-decals);
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
  padding: 10px 0px;
}

.wrap-reverse {
  flex-wrap: wrap-reverse;
}

.presentation-text {
  max-width: 600px;
}

.presentation-icon {
  max-width: 200px;
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

@media screen and (max-width: 650px) {
  .landing {
    padding: 0 15px;
  }
}

</style>
