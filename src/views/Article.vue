<template>
  <div class="article readable fullheight-min">
    <div class="article-image">
      <img :src="'/img/' + project.slug + '/capture.png'" alt="Project capture">
    </div>
    
    <div class="tags">
      <Tag v-for="tag in project.tags" 
        :key="'tag-' + tag"
        :name=tag
        color="black"
        @click="moveToTagSearch(tag)"
      />
    </div>

    <div class="links">
      <a target="_blank" v-if=project.links.repo :href=project.links.repo><i class="material-icons">code</i></a>
      <a target="_blank" v-if=project.links.video :href=project.links.video><i class="material-icons">ondemand_video</i></a>
      <a target="_blank" v-if=project.links.website :href=project.links.website><i class="material-icons">language</i></a>
      <a target="_blank" v-if=project.links.demo :href=project.links.demo><i class="material-icons">directions_run</i></a>
    </div>

    <h1 class="article-title">{{ project.name }} ({{ project.year }})</h1>

    <small class="partners" v-if="project.partners.length > 0">
      In collaboration with
      <template v-for="partner in project.partners" :key="'partner-' + partner.lname" >
        <a v-if="partner.linkedin" :href=partner.linkedin target="_blank" class="linkable-partner">
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
      project: { partners: [], links: {}},
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

.article-title, .partners, .links {
  text-align: center;
}

.partners a {
  text-decoration: none;
  color: black;
  padding-bottom: 2px;
}

.linkable-partner {
  border-bottom: 3px solid blueviolet;
}

.linkable-partner:hover {
  color: blueviolet;
}

.links i {
  margin: 30px 10px 0px 10px;
  background-color: white;
  color: black;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.5em;
}

.links i:hover {
  color: gray;
}

</style>
