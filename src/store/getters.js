const getters = {
  items: (state) => state.search.items,
  size: (state) => state.search.pagination.size,
  total: (state) => state.search.total,
  loading: (state) => state.search.loading,
};
export default getters;
