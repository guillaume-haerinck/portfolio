<template>
  <div class="project">
    <div class="date right">
      <h4 class="backgrounded">{{ date }}</h4>
    </div>
  
    <div class="center">
      <img :src=logo>
    </div>

    <p class="center">{{ description }}</p>
    <div class="center">
      <a :href=url>
        <img :src=capture>
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

<style scoped lang="scss">
.project {
  display: grid;
}

.date {
  justify-content: right;
}

h3 {
  margin: 40px 0 0;
}
</style>
