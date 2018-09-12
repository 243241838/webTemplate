import Template from '@/template';
import userManage from './userManage'; //上架管理

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
            component: userManage,
            meta: {
                title: '产品'
            }
        }
    ]
    
}