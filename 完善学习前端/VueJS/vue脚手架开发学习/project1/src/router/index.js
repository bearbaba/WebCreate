import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home';
import about from '../components/about';

Vue.use(Router);
const routes = [
  // {
  //   path: '/',
  //   component: home,
  //   redirect: '/about',
  // },
  {
    path: '/home',
    component: home,
    redirect: '/about',
  },
  {
    path: '/about',
    component: about,
  },
];
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});
export default router;
