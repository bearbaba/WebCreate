import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home';

Vue.use(Router);
const routes = [{
  path: '/',
  component: home,
},
{
  path: '/home',
  component: home,
},
];
const router = new Router({
  routes,
  mode: 'history',
});
export default router;
