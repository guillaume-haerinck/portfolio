<template>
  <div class="project">
    <h1>{{ description }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Project extends Vue {
  @Prop() private description!: string;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
