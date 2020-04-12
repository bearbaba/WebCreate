import Vue from 'vue';
import Router from 'vue-router';
// import home from '../components/home';
// import about from '../components/about';
// import user from '../components/user';

const home = () => import('../components/home.vue');
const about = () => import('../components/about.vue');
const user = () => import('../components/user.vue');

Vue.use(Router);
const routes = [
  {
    path: '/',
    component: home,
    redirect: '/home',
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/about',
    component: about,
  },
  {
    path: '/user/:userId',
    component: user,
  },
];
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});
export default router;
