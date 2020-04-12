import Vue from 'vue';
import Router from 'vue-router';
// import home from '../components/home';
// import about from '../components/about';
// import user from '../components/user';

const home = () => import('../components/home.vue');
const about = () => import('../components/about.vue');
const user = () => import('../components/user.vue');
const homeMessage = () => import('../components/homeMessage.vue');
const news = () => import('../components/news.vue');
const fileAbout = () => import('../components/fileAbout.vue');

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
    children: [
      {
        path: 'homeMessage',
        component: homeMessage,
      },
      {
        path: 'news',
        component: news,
      },
    ],
  },
  {
    path: '/about',
    component: about,
    children: [
      {
        path: 'fileAbout',
        component: fileAbout,
      },
    ],
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
