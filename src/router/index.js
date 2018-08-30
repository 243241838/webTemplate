import Vue from 'vue'
import Router from 'vue-router'
import userManage from '../web/userManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userManage',
      name: 'userManage',
      component: userManage
    },
    {
      path: '/', 
      redirect: '/userManage' //重定向
    }
  ]
})
