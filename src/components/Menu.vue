<template>
  <div class="menu">
    <div class="menu-logo">
      <img />
    </div>

    <div class="menu-items">
      <router-link class="menu-item" to="/">
        <img />
        Profile
      </router-link>
      <router-link class="menu-item" to="/projects">
        <img />
        Projects
      </router-link>
      <a class="menu-item" href="https://learn-computer-graphics.github.io/blog/" target="blank">
        <img />
        Blog
      </a>
    </div>

    <div class="menu-search">
      <img />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Menu extends Vue {

}
</script>

<style scoped lang="css">
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
