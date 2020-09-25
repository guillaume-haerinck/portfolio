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
import { Component, Prop, Vue } from 'vue-property-decorator';

import Tag from '@/components/Tag.vue';

@Component
export default class Project extends Vue {
  @Prop() private name!: string;
  @Prop() private description!: string;
  @Prop() private date!: string;
  @Prop() private logo!: string;
  @Prop() private url!: string;
  @Prop() private capture!: string;
}
</script>

<style scoped lang="css">

.project {
  max-width: 400px;
  margin: 20px;
}

.project-image img {
  width: 100%;
}

</style>
