import { createStore } from "vuex";

export default createStore({
  state: {
    baiduinit: window,
    abc: 456
  },
  mutations: {
    setState(state, data) {
      state.abc = data.abc;
    }
  },
  actions: {},
  modules: {},
});
