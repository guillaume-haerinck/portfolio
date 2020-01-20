<template>
  <div class="early-project">
    <a :href=url><img :src=logo :alt=name></a>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EarlyProject extends Vue {
  @Prop() private name!: string;
  @Prop() private description!: string;
  @Prop() private logo!: string;
  @Prop() private url!: string;
}
</script>

<style scoped lang="scss">
.early-project {
  display: grid;
  justify-content: center;
  justify-items: center;
  max-width: 500px;
  width: 100%;
  background-color: white;
  margin: 20px;

  img {
    max-height: 250px;
  }

  p {
    padding: 5px 20px;
  }
}

</style>
