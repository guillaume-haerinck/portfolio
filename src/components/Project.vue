<template>
  <div class="project">
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
    description: String,
    date: String,
    logo: String,
    url: String,
    capture: String
  }
});
</script>

<style scoped>

.project {
  max-width: 400px;
  margin: 20px;
}

.project-image img {
  width: 100%;
}

</style>
