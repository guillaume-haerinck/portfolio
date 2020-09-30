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
    window.addEventListener('resize', this.updateMobileState);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateMobileState);
  }
});
</script>

<style >
:root {
  --left-decals: 20px;
  --menu-height: 50px;
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
  min-height: calc(100vh - var(--menu-height));
}

</style>
