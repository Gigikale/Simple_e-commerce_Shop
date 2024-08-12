import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginForm from '../view/LoginForm.vue';
import SignUp from '../view/SignUp.vue';
import HomePage from "../components/HomePage.vue";
import ProductList from '../view/ProductList.vue';
import AddProduct from '../view/AddProduct.vue';


// import ShopAdmin from '../views/ShopAdmin.vue';
// import store from '../store/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/products',
    component: ProductList,
  },
  {
    path: '/add-product',
    component: AddProduct,
  },
  {
    path: '/login',
    component: LoginForm,
  },
  // {
  //   path: '/admin',
  //   component: ShopAdmin,
  //   meta: { requiresAuth: true },
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// Navigation guards (if needed)
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.userIsAuthenticated) {
//       next('/products');
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
