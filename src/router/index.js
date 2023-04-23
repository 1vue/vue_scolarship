import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '@/components/login.vue'
import global from '@/assets/css/global.css'
import test from '@/components/test.vue'
import home from '@/components/home.vue'

import welcome from '@/components/welcome.vue'
import basedata from '@/components/mainbody/basedata.vue'
import query from '@/components/mainbody/query.vue'
import show from '@/components/mainbody/show.vue'

import allcompetitions from '@/components/mainbody/allcompetitions.vue'
import addcompetitions from '@/components/mainbody/addcompetitions.vue'

import codesettings from '@/components/mainbody/codesettings.vue'
import count from '@/components/mainbody/count.vue'

import home2 from '@/components/home2.vue'
import welcome2 from '@/components/welcome2.vue'
import scoredata from '@/components/manage-mainbody/scoredata.vue'
import competitionsfile from '@/components/manage-mainbody/competitionsfile.vue'
import informfile from '@/components/manage-mainbody/informfile.vue'
import infosettings from '@/components/manage-mainbody/infosettings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',

  },
  { path: '/login', component: login },
  { path: '/test', component: test },
  {
    path: '/home', component: home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: welcome },
      { path: '/basedata', component: basedata },
      { path: '/query', component: query },
      { path: '/show', component: show },
      { path: '/allcompetitions', component: allcompetitions },
      { path: '/addcompetitions', component: addcompetitions },
      { path: '/codesettings', component: codesettings },
      { path: '/count', component: count },
    ]

  },
  {
    path: '/home2', component: home2,
    redirect: '/welcome2',
    children: [
      { path: '/welcome2', component: welcome2 },
      { path: '/scoredata', component: scoredata },
      { path: '/competitionsfile', component: competitionsfile },
      { path: '/informfile', component: informfile },
      { path: '/infosettings', component: infosettings },
    ]
  },
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login')
    next()
  const tokenvalue = window.sessionStorage.getItem('token')
  if (!tokenvalue)
    return next('/login')
  next()
})

export default router
