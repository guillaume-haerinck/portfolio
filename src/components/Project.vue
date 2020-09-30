<template>
  <div class="project" :class="colorClass">
    <div class="project-image">
      <a :href=url><img :src=capture alt="Project capture"></a>
    </div>
    <div class="project-description">
      <h4>{{ name }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
      colorClass: classes[index]
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
