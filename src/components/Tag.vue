<template>
  <div class="tag">
    <p>{{ name }} {{ enabled }}</p>
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

</style>
