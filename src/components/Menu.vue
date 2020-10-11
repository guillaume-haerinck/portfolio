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
      <a class="menu-item" href="https://learn-computer-graphics.github.io/blog/" target="_blank">
        <i class="material-icons">book</i>
        Blog
      </a>
    </div>

    <div class="menu-items menu-search" v-on:click="moveToProjectsAndToggleSearch">
      <i class="material-icons" v-if="!isProjectsAndSearch">search</i>
      <i class="material-icons" v-else style="color: red">search_off</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import router from '@/router'

export default defineComponent({
  name: 'Menu',
  methods: {
    moveToProjectsAndToggleSearch() {
      const isProjects = router.currentRoute.value.path === '/projects';
      if (!isProjects) {
        router.push('/projects');
        store.commit('setShowSearchMenu', true);
      } else {
        store.commit('setShowSearchMenu', !store.state.showSearchMenu);
      }
    }
  },
  computed: {
    isMobile() {
      return store.state.isMobile;
    },
    isProjectsAndSearch() {
      const isProjects = router.currentRoute.value.path === '/projects';
      const isSearch = store.state.showSearchMenu;
      return isProjects && isSearch;
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
  height: var(--menu-height);
  top: 0;
  background-color: black;
  width: 100%;
  color: white;
  z-index: 10;
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
