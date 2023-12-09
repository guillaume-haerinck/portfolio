<template>
  <div class="article readable fullheight-min">
    <div v-if=project.links.video class="article-image" v-html="project.links.video" ></div>
    <div v-else class="article-image">
      <img :src="'/img/' + project.slug + '/capture.webp'" alt="Project capture">
    </div>
    
    <div class="article-tags">
      <Tag v-for="tag in project.tags" 
        :key="'tag-' + tag"
        :name=tag
        color="black"
        @click="moveToTagSearch(tag)"
      />
    </div>

    <div class="links">
      <a target="_blank" class="linkable-partner" v-if=project.links.repo :href=project.links.repo><i class="material-icons">code</i>Source</a>
      <a target="_blank" class="linkable-partner" v-if=project.links.website :href=project.links.website><i class="material-icons">ondemand_video</i>Website</a>
      <a target="_blank" class="linkable-partner" v-if=project.links.demo :href=project.links.demo><i class="material-icons">play_arrow</i>Play</a>
    </div>

    <h1 class="article-title">{{ project.name }} ({{ project.year }})</h1>

    <small class="partners" v-if="project.partners.length > 0">
      In collaboration with
      <template v-for="(partner, index) in project.partners" :key="'partner-' + partner.lname" >
        <a v-if="partner.linkedin" :href=partner.linkedin target="_blank" class="linkable-partner">
          {{ partner.fname }} {{ partner.lname }}
        </a>
        <a v-else>
          {{ partner.fname }} {{ partner.lname }}
        </a>
        <template v-if="project.partners.length - 1 != index">, </template>
      </template>
    </small>

    <div class="article-content" v-if="content.length >= 1" v-html="content"></div>
    <p v-else>Loading</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from '@/components/Tag.vue'
import router from '@/router'
import { marked } from 'marked'
import Projects from '@/assets/projects-data.json'

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

<style>
.article {
  align-content: flex-start;
}

.article-image {
  justify-self: center;
  margin: 25px 0;
}

.article-image img {
  max-width: 100%;
  max-height: 250px;
}

.article-image iframe {
  max-width: 100%;
  max-height: 350px;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.article-title, .partners, .links {
  text-align: center;
}

.partners {
  line-height: 150%;
}

.partners a {
  text-decoration: none;
  color: black;
}

.linkable-partner a:hover {
  color: blueviolet;
}

.linkable-partner {
  border-bottom: 2px solid blueviolet;
}

.linkable-partner:hover {
  color: blueviolet;
}

.links {
  margin: 15px 0px 5px 0px;
}

.links a {
  text-decoration: none;
  color: black;
  margin: 0px 10px;
  padding-bottom: 2px;
}

.links i {
  position: relative;
  top: 6px;
  margin-right: 3px;
}

/* Markdown custom styling */

.article-content figcaption {
  text-align: center;
  margin-top: -20px;
}

.article-content a {
  text-decoration: none;
  color: black;
  padding-bottom: 1px;
  border-bottom: 2px solid blueviolet;
}

.article-content a:hover {
  color: blueviolet;
}

.article-content p, .article-content li {
  font-size: 1.1em;
  font-weight: 300;
  line-height: 180%;
}

.article-content img {
  width: 100%;
  max-width: 600px;
}

.article-content strong {
  font-weight: 500;
}

</style>
