import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: "home",
            component: () => import('../views/ScheduleView.vue')
        },
        {
            path: '/subscribe',
            name: 'subscribe',
            component: () => import('../views/SubscribeView.vue')
        }
    ]
})

export default router;
