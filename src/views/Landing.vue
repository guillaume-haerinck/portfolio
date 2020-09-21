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

    <div class="fullheight">
      <div class="title">
        <h1>PRESENTATION</h1>
      </div>

      <div class="presentation-element">
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

    <div class="title">
      <h1>LAST PROJECTS</h1>
    </div> 

    <!--
    <Project v-for="(project, index) in projects" 
      :key="'project' + index"
      :name="project.name"
      :description="project.description"
      :date="project.date"
      :logo="project.logo"
      :url="project.url"
      :capture="project.capture"
    />

    -->

    <div>More</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Project from '@/components/Project.vue';

import Projects from '@/assets/projects-data.json';

@Component({
  components: {
    Project
  }
})
export default class Landing extends Vue {
  // Data
  projects = [ Projects[0], Projects[2] ];
}
</script>

<style scoped lang="css">
.landing {
  padding: 0 50px;
}

/* First screen */

#first-screen {
  display: grid;
  align-content: center;
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

.presentation-element {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.presentation-text {
  max-width: 500px;
}

.presentation-icon {
  max-width: 200px;
}

.presentation-icon img {
  width: 100%;
}

</style>
