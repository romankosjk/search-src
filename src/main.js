import Vue from 'vue';
import {
  ModalPlugin, PaginationPlugin, OverlayPlugin, SpinnerPlugin,
} from 'bootstrap-vue';
import App from '@/App.vue';
import store from './store';

import '@/assets/scss/main.scss';

Vue.use(ModalPlugin);
Vue.use(PaginationPlugin);
Vue.use(OverlayPlugin);
Vue.use(SpinnerPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
