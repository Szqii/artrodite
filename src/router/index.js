import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeView.vue')  
  },
  {
    path: '/contact',
    name: 'about',
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
      }
    ]
  },
  {
    path: '/studio',
    name: 'studio',
    component: () => import( '../views/StudioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
