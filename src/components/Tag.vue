<template>
  <div class="tag">
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tag',
  props: {
    name: String
  }
});
</script>

<style scoped>

</style>
