<template>
  <div class="article readable fullheight-min">
    <div class="article-image">
      <img :src="'/img/' + project.slug + '/capture.png'" alt="Project capture">
    </div>
    
    <div class="tags">
      <Tag v-for="(tag, index) in project.tags" 
        :key="'tag-' + index"
        :name=tag
        color="black"
        @click="moveToTagSearch(tag)"
      />
    </div>

    <h1 class="article-title">{{ project.name }}</h1>
    <small class="partners" v-if="project.partners.length > 0">
      In collaboration with
      <template v-for="(partner, index) in project.partners" :key="'partner-' + index" >
        <a v-if="partner.linkedin" :href=partner.linkedin target="blank">
          {{ partner.lname }} {{ partner.fname }}
        </a>
        <a v-else>
          {{ partner.lname }} {{ partner.fname }}
        </a>
        <template v-if="project.partners.length - 1 != index">, </template>
      </template>
    </small>

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

// TODO links and year

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
      project: { partners: []},
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
  align-content: flex-start;
}

.article-image {
  justify-self: center;
}

.article-image img {
  max-width: 100%;
  max-height: 250px;
  margin: 25px 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.article-title, .partners {
  text-align: center;
}

</style>
