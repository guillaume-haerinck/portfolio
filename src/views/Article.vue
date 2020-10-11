<template>
  <div class="article readable fullheight-min">
    <div>
      <img :src="'/img/' + project.slug + '/capture.png'" alt="Project capture">
    </div>
    <h1>{{ project.name }}</h1>
    <div class="tags">
      <Tag v-for="(tag, index) in project.tags" 
        :key="'tag-' + index"
        :name=tag
        @click="moveToTagSearch(tag)"
      />
    </div>

    <span v-if="content.length >= 1" v-html="content"></span>
    <p v-else>Loading</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from '@/components/Tag.vue'
import router from '@/router'
import marked from 'marked'
import Projects from '@/assets/projects-data.json'

// TODO intro text with people, date, image, tags, links

export default defineComponent({
  name: 'Article',
  components: {
    Tag
  },
  mounted() {
    const name = router.currentRoute.value.params.projectName as string;
    this.project = (Projects as any)[name];
    window.scrollTo(0, 0);

    fetch('/articles/' + name + '.md')
      .then(res => res.text())
      .then(text => {
        this.content = marked(text);
      });
  },
  data() {
    return {
      project: {},
      content: ""
    }
  },
  methods: {
    moveToTagSearch(tag: string) {
      router.push({ path: '/projects', query: { tags: tag + ';'}});
    }
  }
});
</script>

<style scoped>
.article {

}

</style>
