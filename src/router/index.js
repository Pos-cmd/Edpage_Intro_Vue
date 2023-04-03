import {createRouter, createWebHistory} from "vue-router";
import ScheduleView from "../views/ScheduleView.vue";
import SubscribeView from "../views/SubscribeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: "home",
            component: () => ScheduleView
        },
        {
            path: '/subscribe',
            name: 'subscribe',
            component: () => SubscribeView
        }
    ]
})

export default router;