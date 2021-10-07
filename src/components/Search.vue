<template>
  <div class="box-input-search">
    <div class="input-group input-group-lg mx-auto position-relative">
      <div class="input-group-prepend">
          <span class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                 viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </span>
      </div>
      <input type="text" v-model="message" @keyup="searchResult" class="form-control" placeholder="search all of npm" >
      <span class="search-loader d-flex align-items-center justify-content-center" v-if="loading">
          <b-spinner type="grow" label="Spinning"></b-spinner>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    message: {
      get() {
        return this.$store.state.search.text;
      },
      set(value) {
        this.$store.commit('search/SET_TEXT', value);
      },
    },
  },
  methods: {
    searchResult() {
      this.$nextTick(() => {
        this.$store.dispatch('search/resetPagination');
        this.$store.dispatch('search/searchPackage');
      });
    },
  },
};
</script>

<style scoped lang="scss">
.box-input-search {
  .input-group {
    width: 100%;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  .search-loader {
    position: absolute;
    right: 0;
    top: 0;
    width: 48px;
    height: 48px;
    z-index: 10;
  }
}
</style>
