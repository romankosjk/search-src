<template>
  <div class="d-flex text-muted pt-3">
    <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
      <div class="d-flex">
        <div>
          <a target="_blank" class="text-dark" :href="item.package.links.npm">
            <strong class="text-gray-dark">{{item.package.name}}</strong>
          </a>
          <a target="_blank" :href="item.package.links.repository" class="d-block" v-if="item.package.author">
            {{item.package.author.name}}
          </a>
        </div>
        <a href="#" @click.prevent="onChangeDescription(item.package.description)" class="ml-auto">description</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageItem',
  props: {
    item: {
      default: {},
    },
  },
  methods: {
    onChangeDescription(description) {
      this.$emit('modalDescription', description);
    },
  },
};
</script>

<style scoped lang="scss"></style>
