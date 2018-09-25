import 'babel-polyfill'; //开发环境显示  360和ie
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router';
import store from './store';
import * as filters from './filters/index.js'
import '@/assets/scss/reset.scss'; //重置样式
import Cookies from 'js-cookie';
import Swiper from 'swiper';
// 赋值到Vue的原型上面，在页面就可以使用this.$ + name获取到了
Vue.prototype.$Swiper = Swiper;
Vue.prototype.$Cookies = Cookies;

//全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
Vue.use(Vuex);

/* eslint-disable no-new */


//全局钩子作用于所有路由，里面的参数to表示即将要进入的路由对象，from表示即将要离开的路由对象 路由进入之前
router.beforeEach((to, from, next) => {
  // if (to.path == '/') {
  //   next();
  // }
  /* 路由发生变化修改页面meta */ //搜索关键字什么的可以使用
  if (to.meta.content) {
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();

});
// //路由进入之后
router.afterEach((to, from) => {

});


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
