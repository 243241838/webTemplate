import Template from '@/template';
import index from './index.vue';
export default {
    path: '/',
    component: Template,
    meta: {
        title: '主页'
    },
    children: [
        {
            path: 'index',
            name: 'index',
            component: index,
            meta: {
                title: '主页'
            }
        },
        {
            path: '/',
            redirect: '/index' //重定向为主页
        },
    ]

}