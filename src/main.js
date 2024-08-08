import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from './store';
// import BaseBadge from './components/ui/BaseBadge.vue';

// Create the Vue instance
const app = new Vue({
  router,
 
  store,
  render: h => h(App)
});

// Register global components (if needed)
// Vue.component('base-badge', BaseBadge);

// Mount the app to the DOM
app.$mount('#app');
