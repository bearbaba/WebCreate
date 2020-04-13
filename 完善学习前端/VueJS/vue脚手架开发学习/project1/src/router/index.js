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
    meta: {
      title: '首页',
    },
    // children: [{
    //   path: 'homeMessage',
    //   component: homeMessage,
    //   meta: {
    //     title: '主页信息',
    //   },
    // },
    // {
    //   path: 'news',
    //   component: news,
    //   meta: {
    //     title: '新闻',
    //   },
    // }],
  },
  {
    path: '/user/:userId',
    component: user,
    meta: {
      title: '用户',
    },

    children: [
      {
        path: 'homeMessage',
        component: homeMessage,
        meta: {
          title: '关于',
        },
      },
      {
        path: 'news',
        component: news,
        meta: {
          title: '新闻',
        },
      },
    ],
  },
  {
    path: '/about',
    component: about,
    meta: {
      title: '关于',
    },
    children: [
      {
        path: 'fileAbout',
        component: fileAbout,
        meta: {
          title: 'fileAbout',
        },
      },
    ],
  },
  {
    path: '/user/:userId',
    component: user,
    meta: {
      title: '用户',
    },
  },
];
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
