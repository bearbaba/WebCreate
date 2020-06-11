import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home');
const List = () => import('../views/list/List');
const Cart = () => import('../views/cart/Cart');
const  Profile = () => import('../views/profile/Profile');
const Detail = () =>import('../views/detail/Detail')

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
},{
  path: '/detail/:iid',
  component: Detail
}];

const router = new VueRouter({
  routes
})

export default router;
