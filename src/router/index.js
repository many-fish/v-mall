import Vue from 'vue'
import Router from 'vue-router'
import MetaInfo from 'vue-meta-info'

// 登录模块 路由
// import loginRouter from '@/router/login.router'

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
        // 登录模块
        // ...loginRouter,
    ]
});

// 路由变化修改title
// router.beforeEach((to, form) => {
//     if (to.meta.title) {
//         document.title = to.meta.title
//     }
// });
export default router
