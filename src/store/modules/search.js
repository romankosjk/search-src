import getQuery from '@/api/query';

const getDefaultState = () => ({
  items: [],
  text: '',
  total: 0,
  loading: false,
  pagination: {
    size: 10,
    from: 1,
  },
});

const state = getDefaultState();

const mutations = {
  SET_TEXT: (state, payload) => {
    state.text = payload;
  },
  SET_SIZE: (state, payload) => {
    state.pagination.size = payload;
  },
  SET_FROM: (state, payload) => {
    state.pagination.from = payload;
  },
  SET_ITEMS: (state, payload) => {
    state.items = payload;
  },
  SET_TOTAL: (state, payload) => {
    state.total = payload;
  },
  SET_LOADING: (state, payload) => {
    state.loading = payload;
  },
};

const actions = {
  async searchPackage({ commit, state }) {
    try {
      commit('SET_LOADING', true);
      const pagination = {
        size: state.pagination.size,
        from: (state.pagination.from - 1) * state.pagination.size,
      };
      const { objects, total } = await getQuery({ text: state.text, ...pagination });
      commit('SET_ITEMS', objects);
      commit('SET_TOTAL', total);
      commit('SET_LOADING', false);
    } catch (error) {
      // console.log(error);
    }
  },

  resetPagination({ commit }) {
    commit('SET_FROM', 1);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
