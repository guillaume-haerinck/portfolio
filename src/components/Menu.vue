<template>
  <div class="menu">
    <div class="menu-logo">
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

    <div class="menu-items">
      <router-link class="menu-item" to="/projects">
        <i class="material-icons">search</i>
      </router-link>
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
  align-items: center;
  top: 0;
  background-color: black;
  width: 100%;
  color: white;
}

.menu-logo {
  width: 60px;
  margin: 5px 0px;
}

.menu-logo img {
  width: 100%;
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

.menu-item:hover {
  color: gray;
}

</style>
