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
    addProjectTag(state: any, tag: ProjectTag) {
      state.projectTags.push(tag);
      console.log('here');
    },
    removeProjectTag(state: any, tagIndex: number) {
      state.projectTags.splice(tagIndex, 1);
    },
    setProjectCategories(state: any, categories: ProjectCategory[]) {
      state.projectCategories = categories;
    }
  }
});
