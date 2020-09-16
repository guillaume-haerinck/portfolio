<template>
  <div class="landing">
    <div id="first-screen">
      <h1 class="backgrounded left">Hello I'm Guillaume,<br>a software engineer student <br>based in Paris.</h1>
      <p id="description">Exploring computer graphics, I'm making projects related to realtime rendering, data-oriented design, web and user interface development.</p>

      <div id="links">
        <p><a id="linkedin" href="https://www.linkedin.com/in/guillaumehaerinck/">linkedin</a></p>
        <p><a id="vimeo" href="https://vimeo.com/guillaumehaerinck">vimeo</a></p>
        <p><a id="cv" href="https://www.guillaumehaerinck.com/cv-en.pdf">cv</a></p>
        <p><a id="github" href="https://github.com/guillaume-haerinck">github</a></p>
      </div>
    </div>

    <div class="separator">
      <h3 class="backgrounded left">A selection of sofwares I worked on.</h3>
    </div>

    <Project v-for="(soft, index) in softwares" 
      :key="'soft' + index"
      :name="soft.name"
      :description="soft.description"
      :date="soft.date"
      :logo="soft.logo"
      :url="soft.url"
      :capture="soft.capture"
    />

    <span class="separator spacing"></span>

    <h3 class="backgrounded left">Some projects in early stages.</h3>

    <div class="earlies">
      <EarlyProject class="backgrounded" v-for="(early, index) in earlies" 
        :key="'ep' + index"
        :name="early.name"
        :description="early.description"
        :logo="early.logo"
        :url="early.url"
      />
    </div>

    <span class="separator spacing"></span>

    <h3 class="backgrounded left">A selection of websites I made.</h3>

    <Project v-for="(web, index) in webs" 
      :key="'web-' + index"
      :name="web.name"
      :description="web.description"
      :date="web.date"
      :logo="web.logo"
      :url="web.url"
      :capture="web.capture"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Project from '@/components/Project.vue';
import EarlyProject from '@/components/Early-Project.vue';

import Softs from '@/assets/softwares-data.json';
import Webs from '@/assets/webs-data.json';
import Earlies from '@/assets/earlies-data.json';

@Component({
  components: {
    Project,
    EarlyProject
  }
})
export default class App extends Vue {
  // Data
  softwares = Softs;
  webs = Webs;
  earlies = Earlies;
}
</script>

<style scoped lang="css">
.landing {
  padding: 0 50px;
  display: grid;
}

#first-screen {
  min-height: 100vh;
  display: grid;
  align-content: center;
}

.separator {
  display: grid;
  border-top: 2px dashed grey;
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

.earlies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-self: center;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 35px;
}

</style>
