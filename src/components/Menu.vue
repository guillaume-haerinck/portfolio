<template>
  <div class="menu">
    <div class="menu-logo">
      <img src="img/logo-white.png" />
    </div>

    <div class="menu-items">
      <router-link class="menu-item" to="/">
        <i class="material-icons">person</i>
        Profile
      </router-link>
      <router-link class="menu-item" to="/projects">
        <i class="material-icons">work</i>
        Projects
      </router-link>
      <a class="menu-item" href="https://learn-computer-graphics.github.io/blog/" target="blank">
        <i class="material-icons">book</i>
        Blog
      </a>
    </div>

    <div class="menu-search">
      <i class="material-icons">search</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu'
});
</script>

<style scoped>
.menu {
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  top: 0;
  background-color: black;
  width: 100%;
  color: white;
}

</style>
