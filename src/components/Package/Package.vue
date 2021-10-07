<template>
    <div class="box-package my-3 p-3 bg-white rounded shadow-sm" v-if="items.length">
      <h6 class="border-bottom pb-2 mb-0">Real-time search</h6>
      <b-overlay :show="loading" rounded="sm">
        <PackageItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          @modalDescription="onChangeDescription" />
        <div class="d-block box-pagination mt-3">
          <b-pagination
            align="right"
            v-model="from"
            :total-rows="total"
            :per-page="size"
            @change="searchResult"
          ></b-pagination>
        </div>
      </b-overlay>
      <b-modal v-model="showModal" hide-footer title="Description">
        <p v-html="description"></p>
      </b-modal>
    </div>
</template>

<script>
import PackageItem from '@/components/Package/PackageItem.vue';

export default {
  name: 'Package',
  components: {
    PackageItem,
  },
  data() {
    return {
      showModal: false,
      description: '',
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    total() {
      return this.$store.getters.total;
    },
    size() {
      return this.$store.getters.size;
    },
    loading() {
      return this.$store.getters.loading;
    },
    from: {
      get() {
        return this.$store.state.search.pagination.from;
      },
      set(value) {
        this.$store.commit('search/SET_FROM', value);
      },
    },
  },
  methods: {
    searchResult() {
      this.$nextTick(() => {
        this.$store.dispatch('search/searchPackage');
      });
    },
    onChangeDescription(description) {
      this.description = description;
      this.showModal = true;
    },
  },
};
</script>

<style scoped lang="scss"></style>
