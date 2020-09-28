import { createStore } from 'vuex'
import { ProjectTag, ProjectCategory } from './project-types'

export const store = createStore({
  state: {
    projectTags: [],
    projectCategories: []
  },
  mutations: {
    setProjectTags(state: any, tags: ProjectTag[]) {
      state.projectTags = tags;
    },
    setProjectCategories(state: any, categories: ProjectCategory[]) {
      state.projectCategories = categories;
    }
  }
});
