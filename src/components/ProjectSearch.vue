<template>
  <div class="project-search fullheight-min">
    <div class="overlay" v-if="isMobile" v-on:click="close"></div>

    <h1 class="title">SEARCH</h1>

    <h2>Context</h2>
    <div class="tags">
      <Tag v-for="context in contexts"
        :key="'context-' + context"
        :name="context"
        :enabled="isContextEnabled(context)"
        v-on:click="toggleContext(context); topScrollIfMobile()"
      />
    </div>

    <div class="oblique-white"></div>

    <h2>Category</h2>
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
import { ProjectTags, ProjectCategories, ProjectCategory, ProjectTag, ProjectContexts, ProjectContext } from '@/store/project-types'

export default defineComponent({
  name: 'ProjectSearch',
  components: {
    Tag
  },
  data() {
    return {
      tags: ProjectTags,
      categories: ProjectCategories,
      contexts: ProjectContexts,
    }
  },
  mounted() {
    this.applyUrlFilters();
  },
  computed: {
    isMobile() {
      return store.state.isMobile;
    }
  },
  methods: {
    applyUrlFilters() {
      const tags = router.currentRoute.value.query.tags as string;
      if (tags) {
        const tagArray = tags.split(';').filter(tag => tag != '');
        store.commit('addProjectTags', tagArray);
      }
    },
    isContextEnabled(context: string): boolean {
      return store.state.selectedProjectContext == context as ProjectContext;
    },
    isCategoryEnabled(category: string): boolean {
      return store.state.selectedProjectCategory == category as ProjectCategory;
    },
    isTagEnabled(tag: string): boolean {
      return store.state.selectedProjectTags.includes(tag as ProjectTag);
    },
    topScrollIfMobile() {
      if (this.isMobile)
        window.scrollTo(0, 0);
    },
    toggleTag(tag: string) {
      const tagIndex = store.state.selectedProjectTags.indexOf(tag as ProjectTag);
      const isDisabled = tagIndex === -1;
      if (isDisabled) {
        store.commit('addProjectTag', tag);
      }
      else {
        store.commit('removeProjectTag', tagIndex);
      }
    },
    toggleCategory(category: string) {
      if (this.isCategoryEnabled(category)) {
        store.commit('clearSelectedProjectCategory');
      }
      else {
        store.commit('selectProjectCategory', category);
      }
    },
    toggleContext(context: string) {
      if (this.isContextEnabled(context)) {
        store.commit('clearSelectedProjectContext');
      }
      else {
        store.commit('selectProjectContext', context);
      }
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
  margin: 20px 0;
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
}

</style>
