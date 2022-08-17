import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/ShowDailyVerses')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ShowDailyVerses')
  },
  {
    path: '/createDV',
    name: 'createDV',
    component: () => import('../components/CreateDailyVerse')
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
  },
  {
    path: '/createUL',
    name: 'createUL',
    component: () => import('../components/CreateNewUser')
  },
  {
    path: '/viewUL',
    name: 'viewUL',
    component: () => import('../components/ShowUserLogin')
  },
  {
    path: '/editUL',
    name: 'editUL',
    component: () => import('../components/EditUserLogin')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router