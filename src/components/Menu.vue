<template>
  <div class="menu">
    <div class="menu-logo" v-if="!isMobile">
      <router-link class="menu-item" to="/">
        <img src="img/logo-white.png" />
      </router-link>
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

    <div class="menu-items menu-search">
      <i class="material-icons">search</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'

export default defineComponent({
  name: 'Menu',
  computed: {
    isMobile() {
      return store.state.isMobile;
    }
  }
});
</script>

<style scoped>
.menu {
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  height: 50px;
  top: 0;
  background-color: black;
  width: 100%;
  color: white;
}

.menu-logo img {
  height: 30px;
}

.menu-items {
  justify-self: right;
  align-self: center;
  display: flex;
}

.menu-item {
  color: white;
  text-decoration: none;
  margin: 0px 15px;
  display: inline-flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
}

.menu-item i {
  margin: 0px 5px;
}

.menu-search {
  margin: 0px 15px;
}

.menu-item:hover, .menu-search:hover {
  color: gray;
  cursor: pointer;
}

.router-link-active {
  color: mediumturquoise;
}

@media screen and (max-width: 650px) {
  .menu {
    grid-template-columns: 4fr 1fr;
  }

  .menu-items:first-child {
    justify-self: left;
  }

  .menu-item {
    font-size: 0.8em;
  }
}

</style>
