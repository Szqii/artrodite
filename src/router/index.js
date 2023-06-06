import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( '../views/HomeView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import( '../views/ContactView.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import( '../views/ProjectsView.vue'),
        children: [
            {
                path: '',
                name: 'projects',
                component: () => import( '../components/Projects.vue')
            },
            {
                path: '/projects/berkand',
                name: 'berkand',
                component: () => import( '../components/Projects/berkand-project.vue')
            },
            {
                path: '/projects/hidrobarsan',
                name: 'hidrobarsan',
                component: () => import( '../components/Projects/hidrobarsan-project.vue')
            },
        ]
    },
    {
        path: '/studio',
        name: 'studio',
        component: () => import( '../views/StudioView.vue')
    },
    {
        path: '/team',
        name: 'team',
        component: () => import( '../views/TeamView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import( '../components/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
