<template>
  <div class="tag" :class="{ enabled: enabled }">
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tag',
  props: {
    name: String,
    enabled: Boolean
  }
});
</script>

<style scoped>
.tag {
  border: 2px solid white;
  border-radius: 30px;
  text-align: center;
  margin: 10px;
}

.tag:hover {
  border-color: red;
  color: red;
  transition: border-color 0.3s, color 0.3s;
  cursor: pointer;
}

.tag p {
  font-size: 1em;
}

.enabled, .enabled:hover {
  color: black;
  border-color: red;
  background-color: red;
}

</style>
