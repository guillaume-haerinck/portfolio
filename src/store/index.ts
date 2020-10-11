import { createStore } from 'vuex'
import { ProjectTag, ProjectCategory } from './project-types'

export const store = createStore({
  state: {
    projectTags: [],
    projectCategories: [],
    isMobile: false,
    showSearchMenu: true
  },
  mutations: {
    addProjectTags(state: any, tags: ProjectTag[]) {
      tags.forEach(tag => state.projectTags.push(tag));
    },
    addProjectTag(state: any, tag: ProjectTag) {
      state.projectTags.push(tag);
    },
    removeProjectTag(state: any, tagIndex: number) {
      state.projectTags.splice(tagIndex, 1);
    },
    addProjectCategories(state: any, categories: ProjectCategory[]) {
      categories.forEach(cat => state.projectCategories.push(cat));
    },
    addProjectCategory(state: any, category: ProjectCategory) {
      state.projectCategories.push(category);
    },
    removeProjectCategory(state: any, categoryIndex: number) {
      state.projectCategories.splice(categoryIndex, 1);
    },
    clearSearch(state: any) {
      state.projectCategories = [];
      state.projectTags = [];
    },
    setIsMobile(state: any, value: boolean) {
      state.isMobile = value;
    },
    setShowSearchMenu(state: any, value: boolean) {
      state.showSearchMenu = value;
    }
  }
});
