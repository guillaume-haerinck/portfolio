import { createStore } from 'vuex'
import { ProjectTag, ProjectCategory, ProjectContext } from './project-types'

export interface AppState {
  selectedProjectTags: ProjectTag[];
  selectedProjectCategories:  ProjectCategory[];
  selectedProjectContexts: ProjectContext[];
  isMobile: boolean;
  showSearchMenu: boolean;
}

export const store = createStore({
  state: {
    selectedProjectTags: [],
    selectedProjectCategories: [],
    selectedProjectContexts: [],
    isMobile: false,
    showSearchMenu: true
  } as AppState,
  mutations: {
    addProjectTags(state: AppState, tags: ProjectTag[]) {
      tags.forEach(tag => state.selectedProjectTags.push(tag));
    },
    addProjectTag(state: AppState, tag: ProjectTag) {
      state.selectedProjectTags.push(tag);
    },
    removeProjectTag(state: AppState, tagIndex: number) {
      state.selectedProjectTags.splice(tagIndex, 1);
    },
    addProjectCategories(state: AppState, categories: ProjectCategory[]) {
      categories.forEach(cat => state.selectedProjectCategories.push(cat));
    },
    addProjectCategory(state: AppState, category: ProjectCategory) {
      state.selectedProjectCategories.push(category);
    },
    removeProjectCategory(state: AppState, categoryIndex: number) {
      state.selectedProjectCategories.splice(categoryIndex, 1);
    },
    clearSearch(state: AppState) {
      state.selectedProjectCategories = [];
      state.selectedProjectTags = [];
    },
    setIsMobile(state: AppState, value: boolean) {
      state.isMobile = value;
    },
    setShowSearchMenu(state: AppState, value: boolean) {
      state.showSearchMenu = value;
    }
  }
});
