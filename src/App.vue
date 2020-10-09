<template>
  <div id="app">
    <Menu />
    <router-view/>
    <div id="footer">
      <p><small>Guillaume Haerinck - 2020</small></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from '@/components/Menu.vue'
import { store } from '@/store'

export default defineComponent({
  name: 'App',
  components: {
    Menu
  },
  methods: {
    updateMobileState() {
      if (window.innerWidth < 650)
        store.commit('setIsMobile', true);
      else
        store.commit('setIsMobile', false);
    }
  },
  created() {
    this.updateMobileState();
    window.addEventListener('resize', this.updateMobileState);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateMobileState);
  }
});
</script>

<style >
:root {
  --default-padding: 20px;
  --menu-height: 50px;
  --footer-height: 38px;
  --search-width: 280px;
}

#app {
  display: grid;
}

.readable {
  padding: 0 50px;
  display: grid;
  justify-self: center;
  max-width: 950px;
}

/* Text styling */

body {
  background-color: #f4f4f4;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.2em;
  margin: 0;
  padding: 0;
  margin-top: var(--menu-height);
}

p {
  font-size: 1.2em;
  line-height: 160%;
}

/* Footer */

#footer {
  background-color: black;
}

#footer p {
  color: white;
  text-align: center;
  margin: 0;
  padding: 0;
}

/* Colors */

.red { background-color: lightcoral; }
.green { background-color: lightgreen; }
.blue { background-color: lightblue; }
.yellow { background-color: lightyellow; }
.orange { background-color: lightsalmon; }

/* Common styling */

.backgrounded {
  padding: var(--default-padding);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.button {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 25px 0;
}

.button:hover {
  color: gray;
}

.button i {
  margin: 0 10px;
  background-color: white;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2em;
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
  text-shadow: 3px 3px red;
  margin: 0 20px;
}

.fullheight {
  min-height: calc(100vh - var(--menu-height));
}

.fullheight-min {
  min-height: calc(100vh - calc(var(--menu-height) + var(--footer-height)));
}

.oblique-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
}

.oblique-black {
  background-image: url(/img/oblique-bar-black.svg);
}

.oblique-white {
  background-image: url(/img/oblique-bar-white.svg);
}

.oblique-black, .oblique-white {
  background-repeat: repeat;
  height: 35px;
  width: 100%;
  max-width: 324px;
}

</style>
