import { createStore } from 'vuex'
import { ProjectTag, ProjectCategory } from './project-types'

export const store = createStore({
  state: {
    projectTags: [],
    projectCategories: []
  },
  mutations: {
    addProjectTag(state: any, tag: ProjectTag) {
      state.projectTags.push(tag);
    },
    removeProjectTag(state: any, tagIndex: number) {
      state.projectTags.splice(tagIndex, 1);
    },
    addProjectCategory(state: any, category: ProjectCategory) {
      state.projectCategories.push(category);
    },
    removeProjectCategory(state: any, categoryIndex: number) {
      state.projectCategories.splice(categoryIndex, 1);
    }
  }
});
