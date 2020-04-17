import Vue from 'vue';
import Router from 'vue-router';

// const tarBar = () => import('../components/tarBar/tarBar.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
    },
  ],
});
