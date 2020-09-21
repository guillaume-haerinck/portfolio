<template>
  <div class="menu">
    <p>I'm the menu</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Menu extends Vue {

}
</script>

<style scoped lang="css">
.menu {
  position: fixed;
  top: 0;
  background-color: black;
  width: 100%;
  color: white;
}

</style>
