<template>
  <footer class="text-muted shadow-sm mt-auto">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 py-3 d-flex align-items-start">
          <div>
            <ul class="bd-footer-links list-unstyled p-0 mb-3">
              <li><a target="_blank" href="https://github.com/romankosjk">GitHub</a></li>
            </ul>
            <p class="mb-0">Косяк Роман.</p>
          </div>
          <svg class="bd-placeholder-img rounded ml-auto" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 100x100" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#ffffff"></rect>
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
footer {
  font-size: .875rem;
  background-color: #6f42c1;
  p, a {
    color: #ffffff;
  }
}
</style>
