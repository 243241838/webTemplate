import Template from '@/template';
export default {
    path: '/product',
    component: Template,
    meta: {
        title: '产品管理'
    },
    children: [
        {
            path: 'userManage',
            name: 'product_userManage',
            component: resolve => require(['./userManage'], resolve),
            meta: {
                title: '产品'
            }
        },
        {
            path: 'upload',
            name: 'product_upload',
            component: resolve => require(['./upload'], resolve),
            meta: {
                title: '产品'
            }
        }
    ]

}