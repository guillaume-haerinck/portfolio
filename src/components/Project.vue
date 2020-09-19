<template>
  <div class="project">
    <div class="capture center">
      <a :href=url>
        <img :src=capture alt="Project capture">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

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

</style>
