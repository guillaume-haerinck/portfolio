<template>
  <div class="menu">
    <div class="menu-logo">
      <img />
    </div>

    <div class="menu-items">
      <a class="menu-item" href="/">
        <img />
        Profile
      </a>
      <a class="menu-item" href="/projects">
        <img />
        Projects
      </a>
      <a class="menu-item" href="https://github.com/learn-computer-graphics" target="blank">
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
