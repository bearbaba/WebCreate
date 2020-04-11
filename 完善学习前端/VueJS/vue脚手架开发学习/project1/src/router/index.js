import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home';

Vue.use(Router);

const router = new Router({
  routes: [{
    path: '/home',
    component: home,
  }],
});
export default router;
