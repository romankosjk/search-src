import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import search from './modules/search';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search,
  },
  getters,
});

export default store;
