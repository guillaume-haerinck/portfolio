import { createStore } from 'vuex'
import { ProjectTag, ProjectCategory, ProjectContext } from './project-types'

export interface AppState {
  selectedProjectTags: ProjectTag[];
  selectedProjectCategory: ProjectCategory;
  selectedProjectContext: ProjectContext;
  isMobile: boolean;
  showSearchMenu: boolean;
}

export const store = createStore({
  state: {
    selectedProjectTags: [],
    selectedProjectCategory: ProjectCategory.NONE,
    selectedProjectContext: ProjectContext.NONE,
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
    selectProjectCategory(state: AppState, category: ProjectCategory) {
      state.selectedProjectCategory = category;
    },
    clearSelectedProjectCategory(state: AppState) {
      state.selectedProjectCategory = ProjectCategory.NONE;
    },
    selectProjectContext(state: AppState, context: ProjectContext) {
      state.selectedProjectContext = context;
    },
    clearSelectedProjectContext(state: AppState) {
      state.selectedProjectContext = ProjectContext.NONE;
    },
    clearSearch(state: AppState) {
      state.selectedProjectContext = ProjectContext.NONE;
      state.selectedProjectCategory = ProjectCategory.NONE;
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
