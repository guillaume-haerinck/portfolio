<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h3>Hello I'm Guillaume, a software engineer student based in Paris</h3>
    <p>Exploring computer graphics, I'm making projects related to realtime rendering, data-oriented design, web and user interface development</p>

    <Project description="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import Project from '@/components/Project.vue'

export default {
  name: 'home',
  components: {
    Project
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
