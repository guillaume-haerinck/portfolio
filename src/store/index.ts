import { createStore } from 'vuex'

const state = {
  count: 0
};
type State = typeof state;

export const store = createStore({
  state: state,
  mutations: {
    increment(state: State) {
      state.count++;
    }
  }
})
