import Template from '@/template';
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
            component: resolve => require(['./index.vue'], resolve),
            meta: {
                title: '主页',
                content: '32453'
            }
        },
        {
            path: '/',
            redirect: '/index' //重定向为主页
        },
    ]

}