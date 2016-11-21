/*
此文件为路由配置文件
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App'

import { configRouter } from './route-config'

// create router
const router = new VueRouter({
  history: true,
  linkActiveClass: 'active',
  saveScrollPosition: true
})

// configure router
configRouter(router)

router.start(App, 'body')
