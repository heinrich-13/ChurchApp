import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/CreateDailyVerse')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ShowDailyVerses')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditDailyVerse')
  },
  {
    path: '/viewPR',
    name: 'viewPR',
    component: () => import('../components/ShowPrayerReq')
  },
  {
    path: '/createPR',
    name: 'createPR',
    component: () => import('../components/CreatePrayerReq')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router