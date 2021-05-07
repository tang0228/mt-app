import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: '南昌',
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    },
  },
  actions: {
    setPosition({ commit }, val) {
      commit('setPosition', val);
    },
  },
  modules: {
  },
});
