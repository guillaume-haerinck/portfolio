<template>
  <div class="tag" :class="[{enabled: enabled}, color ]">
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tag',
  props: {
    name: String,
    enabled: Boolean,
    color: { type: String, value: 'white' }
  }
});
</script>

<style scoped>
.tag {
  border: 2px solid;
  border-radius: 30px;
  text-align: center;
  margin-bottom: 5px;
  margin-right: 5px;
}

.tag:hover {
  border-color: red;
  color: red;
  cursor: pointer;
}

.tag p {
  font-size: 1em;
  margin: 1px 5px;
}

.enabled, .enabled:hover {
  color: black;
  border-color: lightgreen;
  background-color: lightgreen;
}

.white { color: white; border-color: white; }
.black { color: black; border-color: black; }

</style>
