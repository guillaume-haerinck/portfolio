<template>
  <div class="early-project">
    
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

</style>
