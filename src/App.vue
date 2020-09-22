<template>
  <div id="app">
    <Menu/>
    <router-view/>
    <div id="footer">
      <p><small>Guillaume Haerinck - 2020</small></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue';

@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {
}
</script>

<style lang="css">
:root {
  --left-decals: 20px;
}

/* Text styling */

body {
  background-color: #f4f4f4;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.2em;
  margin: 0;
  padding: 0; 
}

p {
  font-size: 1.2em;
  line-height: 160%;
}

/* Footer */

#footer {
  background-color: white;
}

#footer p {
    text-align: center;
    margin: 0;
    padding: 0;
}

/* Common styling TODO add top padding class for menu prevent hide content, use css var */

.backgrounded {
  background-color: white;
  padding: var(--left-decals);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.left {
  justify-self: left;
}

.right {
  justify-self: right;
}

.center {
  justify-self: center;
}

.spacing {
  margin: 15px 0;
}

.title {
  text-align: center;
}

.fullheight {
  min-height: 100vh;
}

</style>
