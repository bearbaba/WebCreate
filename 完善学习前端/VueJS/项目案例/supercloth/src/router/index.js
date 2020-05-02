import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/tabbar/home/Home');
const List = () => import('../views/tabbar/list/List');
const Cart = () => import('../views/tabbar/cart/Cart');
const  Profile = () => import('../views/tabbar/profile/Profile');

Vue.use(VueRouter);

const routes = [{
  path:'/',
  redirect: '/home',
},{
  path: '/home',
  component: Home,
},{
  path: '/cart',
  component: Cart,
},{
  path: '/list',
  component: List,
},{
  path: '/profile',
  component: Profile,
}];

const router = new VueRouter({
  routes
})

export default router;
