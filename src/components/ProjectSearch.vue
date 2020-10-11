<template>
  <div class="project-search fullheight-min">
    <div class="overlay" v-if="isMobile" v-on:click="close"></div>

    <h1 class="title">SEARCH</h1>

    <h2>Categories</h2>
    <div class="tags">
      <Tag v-for="category in categories"
        :key="'category-' + category"
        :name="category"
        :enabled="isCategoryEnabled(category)"
        v-on:click="toggleCategory(category); topScrollIfMobile()"
      />
    </div>

    <div class="oblique-white"></div>

    <h2>Tags</h2>
    <div class="tags">
      <Tag v-for="tag in tags"
        :key="'tag-' + tag"
        :name="tag"
        :enabled="isTagEnabled(tag)"
        v-on:click="toggleTag(tag); topScrollIfMobile()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from './Tag.vue'
import { store } from '@/store'
import router from '@/router'
import { ProjectTags, ProjectCategories } from '@/store/project-types'

// TODO maybe tags and categories definitions on mouse overlay ? On mobile stay pressed to get definition ?

export default defineComponent({
  name: 'ProjectSearch',
  components: {
    Tag
  },
  data() {
    return {
      tags: ProjectTags,
      categories: ProjectCategories
    }
  },
  mounted() {
    const categories = router.currentRoute.value.query.categories as string;
    if (categories) {
      const catArray = categories.split(';').filter(cat => cat != '');
      store.commit('addProjectCategories', catArray);
    }

    const tags = router.currentRoute.value.query.tags as string;
    if (tags) {
      const tagArray = tags.split(';').filter(tag => tag != '');
      store.commit('addProjectTags', tagArray);
    }
  },
  computed: {
    isMobile() {
      return store.state.isMobile;
    }
  },
  methods: {
    topScrollIfMobile() {
      if (this.isMobile)
        window.scrollTo(0, 0);
    },
    toggleTag(tag: string) {
      const tagIndex = store.state.projectTags.indexOf(tag);
      const lastCategories = (router.currentRoute.value.query.categories) ? router.currentRoute.value.query.categories : '';
      const lastTags = (router.currentRoute.value.query.tags) ? router.currentRoute.value.query.tags : '';
      if (tagIndex === -1) {
        store.commit('addProjectTag', tag);
        router.push({query: { categories: lastCategories, tags: lastTags + tag + ';' }});
      }
      else {
        store.commit('removeProjectTag', tagIndex);
        const cleanedRoute = router.currentRoute.value.fullPath.replace(tag + ';', '');
        router.push(cleanedRoute);
      }
    },
    toggleCategory(category: string) {
      const categoryIndex = store.state.projectCategories.indexOf(category);
      const lastCategories = (router.currentRoute.value.query.categories) ? router.currentRoute.value.query.categories : '';
      const lastTags = (router.currentRoute.value.query.tags) ? router.currentRoute.value.query.tags : '';
      if (categoryIndex === -1) {
        store.commit('addProjectCategory', category);
        router.push({query: { categories: lastCategories + category + ';', tags: lastTags }});
      }
      else {
        store.commit('removeProjectCategory', categoryIndex);
        const cleanedRoute = router.currentRoute.value.fullPath.replace(category + ';', '');
        router.push(cleanedRoute);
      }
    },
    isCategoryEnabled(category: string): boolean {
      return store.state.projectCategories.includes(category);
    },
    isTagEnabled(tag: string): boolean {
      return store.state.projectTags.includes(tag);
    },
    close() {
      store.commit('setShowSearchMenu', false);
    }
  }
});
</script>

<style scoped>
.project-search {
  background-color: black;
  color: white;
  left: 0;
  padding: 0 15px;
  max-width: var(--search-width);
  display: grid;
  align-content: start;
  z-index: 3;
}

.overlay {
  position: fixed;
  z-index: 2;
  left: var(--search-width);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  cursor: pointer;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.project-search .title {
  margin-bottom: 10px;
}

.project-search .oblique-white {
  max-width: 252px;
  justify-self: center;
  margin: 60px 0;
}

.project-search h2 {
  margin-top: 0;
}

@media screen and (max-width: 650px) {
  .project-search {
    position: fixed;
    left: 0;
    z-index: 1;
    height: calc(100vh - var(--menu-height));
    overflow-y: scroll;
  }

  .tags:last-child {
    margin-bottom: 160px;
  }

  .oblique-white {
    margin: 30px 0px !important;
  }
}

</style>
