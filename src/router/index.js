import { createRouter, createMemoryHistory } from 'vue-router'

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
      },
       {
        path: '/projects/plasmet',
        name: 'plasmet',
        component: () => import( '../components/Development.vue')
      },
       {
        path: '/projects/havalan',
        name: 'havalan',
        component: () => import( '../components/Development.vue')
      },
       {
        path: '/projects/yamu',
        name: 'yamu',
        component: () => import( '../components/Development.vue')
      }
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
   component: () => import( '../components/Development.vue')
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import( '../components/404.vue') }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
