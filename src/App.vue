<template>
  <main id="app" class="d-flex flex-column h-100">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <section class="box mb-5">
            <Search />
          </section>
          <section class="box">
            <Package />
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Search from '@/components/Search.vue';
import Package from '@/components/Package/Package.vue';
import Header from '@/components/Core/Header.vue';
import Footer from '@/components/Core/Footer.vue';

export default {
  name: 'App',
  components: {
    Search,
    Package,
    Header,
    Footer,
  },
};
</script>

<style lang="scss"></style>
