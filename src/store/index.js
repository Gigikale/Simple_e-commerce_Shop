// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import productsModule from './modules/productService';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsModule,
  },
});
