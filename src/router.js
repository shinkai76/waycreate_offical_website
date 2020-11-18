import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFoundComponent from './views/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '威创'
            }
        },
        {
            path: '*',
            component: NotFoundComponent
        },
        {
            path: '/solution',
            name: 'solution',
            component: () => import('./views/Solution.vue'),
            meta: {
                title: '威创|解决方案'
            }
        },
        {
            path: '/video',
            name: 'video',
            component: () => import('./views/HelpVideo.vue'),
            meta: {
                title: '威创|视频帮助'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: {
                title: '威创|关于我们'
            }
        },
        {
            path: '/apply',
            name: 'apply',
            component: () => import('./views/Apply.vue'),
            meta: {
                title: '威创|申请试用'
            }
        },
        {
            path: '/introduction',
            name: 'introduction',
            redirect: '/introduction/erp',
            component: () => import('./views/Introduction.vue'),
            children: [
                {
                    path: '/',
                    redirect: 'erp',
                    meta: {
                        title: '威创|ERP'
                    }
                },
                {
                    path: 'erp',
                    name: 'erp',
                    meta: {
                        title: '威创|ERP'
                    },
                    component: () => import('./views/introduction/Erp.vue')
                }
            ]
        }
    ]
})
