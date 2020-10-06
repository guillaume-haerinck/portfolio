<template>
  <div class="project" :class="colorClass">
    <div class="project-image">
      <i class="material-icons view" v-show="imgHover">visibility</i>
      <a :href=url target="blank" @mouseover="imgHover = true" @mouseleave="imgHover = false"><img :src=capture alt="Project capture"></a>
    </div>
    <div class="project-description">
      <h4>{{ name }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// TODO Image lazy loading squeletton animation
// TODO use a color code to match the category, no random
// TODO improve design, maybe use logo and only show captures on click, what about displaying tags, and showing multiple links

export default defineComponent({
  name: 'Project',
  props: {
    name: String,
    year: Number,
    url: String,
    description: String,
    capture: String
  },
  data() {
    const classes = ['red', 'blue', 'green', 'yellow', 'orange'];
    const index = Math.floor(Math.random() * Math.floor(classes.length - 1));
    return {
      colorClass: classes[index],
      imgHover: false
    }
  }
});
</script>

<style scoped>

.project {
  max-width: 400px;
  margin: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.view {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: calc(100% - 5px);
  font-size: 50px;
  pointer-events: none;
  color: white;
}

.project-image {
  position: relative; /* needed for view height */
  min-height: 180px;
}

.squeleton-image {
  background-image: linear-gradient(90deg, #ddd 0px, #f6f1f1 120px, #ddd 180px);
  background-size: 800px;
  animation: squeleton 1.5s infinite linear;
}
@keyframes squeleton {
  0% {
    background-position: -60px;
  }
  40%, 100% {
    background-position: 400px;
  }
}

.project-image img {
  width: 100%;
}

.project h4, .project p {
  margin: 0;
}

.project-description {
  padding: 15px;
}

</style>
