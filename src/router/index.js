import Vue from 'vue'
import Router from 'vue-router'
import MetaInfo from 'vue-meta-info'

// 商品模块 路由
import goodsRouter from '@/router/goods'

Vue.use(Router);
Vue.use(MetaInfo);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {
                name: 'index'
            }
        },
        {
            path: '/index',
            name: 'index',
            meta:{
                title: '首页'
            },
            component: () => import ('@/pages/index/index')
        },
        // 商品模块
        ...goodsRouter,
    ]
});

// 路由变化修改title
// router.beforeEach((to, form) => {
//     if (to.meta.title) {
//         document.title = to.meta.title
//     }
// });
export default router
