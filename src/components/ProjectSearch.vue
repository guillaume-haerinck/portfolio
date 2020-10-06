<template>
  <div class="project-search fullheight-min">
    <div class="overlay" v-if="isMobile" v-on:click="close"></div>

    <h1 class="title">SEARCH</h1>

    <h2>Categories</h2>
    <div class="tags">
      <Tag v-for="(category, index) in categories"
        :key="'category-' + index"
        :name="category"
        :enabled="isCategoryEnabled(category)"
        v-on:click="toggleCategory(category); topScrollIfMobile()"
      />
    </div>

    <div class="oblique-white"></div>

    <h2>Tags</h2>
    <div class="tags">
      <Tag v-for="(tag, index) in tags"
        :key="'tag-' + index"
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
      if (tagIndex === -1)
        store.commit('addProjectTag', tag);
      else
        store.commit('removeProjectTag', tagIndex);
    },
    toggleCategory(category: string) {
      const categoryIndex = store.state.projectCategories.indexOf(category);
      if (categoryIndex === -1)
        store.commit('addProjectCategory', category);
      else
        store.commit('removeProjectCategory', categoryIndex);
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
