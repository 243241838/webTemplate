import Vue from 'vue'
import Router from 'vue-router'
import login from '../login'
import APP from '../App';
import index from '@/web/index/index.js';
import product from '@/web/product'
Vue.use(Router)
const defaultRoute = {
  path: '/',
  component: APP,
  children: [
    product,
    index
  ]
};
export default new Router({
  mode: 'history', //去掉#
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    // {
    //   path: '/',
    //   redirect: '/login' //重定向
    // },
    defaultRoute
  ]
})
