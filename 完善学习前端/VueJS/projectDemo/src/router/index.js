import Vue from 'vue';
import Router from 'vue-router';

const cart = () => import('../views/cart/Cart.vue');
const list = () => import('../views/list/List.vue');
const news = () => import('../views/news/News.vue');
const send = () => import('../views/send/Send.vue');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
    },
    {
      path: '/cart',
      component: cart,
    },
    {
      path: '/list',
      component: list,
    },
    {
      path: '/news',
      component: news,
    },
    {
      path: '/send',
      component: send,
    },
  ],
});
