<template>
  <div class="project">
    <div class="date right">
      <h4 class="backgrounded">{{ date }}</h4>
    </div>
  
    <div class="center logo">
      <a :href=url>
        <img :src=logo :alt=name>
      </a>
    </div>

    <p class="description center">{{ description }}</p>
  
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

<style scoped lang="scss">
.project {
  display: grid;
  margin: 10px 0;
}

.description {
  text-align: justify;
  max-width: 1200px;
}

.date {
  justify-content: right;
}

.logo {
  margin: 10px 0;

  img {
    width: 100%;
    max-width: 300px;
  }
}

.capture {
  margin: 10px 0;
  border: 3px solid black;
  width: 100%;
  max-width: 1200px;
}

h3 {
  margin: 40px 0 0;
}
</style>
