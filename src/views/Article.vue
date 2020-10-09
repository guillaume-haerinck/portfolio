<template>
  <div class="article">
    <span v-if="content.length >= 1" v-html="content"></span>
    <p v-else>Loading</p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'
import marked from 'marked'

export default defineComponent({
  name: 'Article',
  mounted() {
    window.scrollTo(0, 0);
    fetch('/articles/' + router.currentRoute.value.params.projectName + '.md')
      .then(res => res.text())
      .then(text => {
        this.content = marked(text);
      });
  },
  data() {
    return {
      content: ""
    }
  }
});
</script>
