import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/LoginHomePage')
  },
  {
    path: '/daily-verse-view/all',
    name: 'viewDailyVerse',
    component: () => import('../components/ShowDailyVerses')
  },
  {
    path: '/daily-verse-create',
    name: 'createDailyVerse',
    component: () => import('../components/CreateDailyVerse')
  },
  {
    path: '/daily-verse-edit/:id',
    name: 'editDailyVerse',
    component: () => import('../components/EditDailyVerse')
  },
  {
    path: '/prayer-request-view/all',
    name: 'viewPrayerRequest',
    component: () => import('../components/ShowPrayerReq')
  },
  {
    path: '/prayer-request-create',
    name: 'createPrayerRequest',
    component: () => import('../components/CreatePrayerReq')
  },
  {
    path: '/user-details-create',
    name: 'createUserDetails',
    component: () => import('../components/CreateNewUser')
  },
  {
    path: '/user-details-show/all',
    name: 'viewUserDetails',
    component: () => import('../components/ShowUserLogin')
  },
  {
    path: '/user-details-edit/:id',
    name: 'userDetailsEdit',
    component: () => import('../components/EditUserLogin')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router