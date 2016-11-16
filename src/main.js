import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App'

import Index from './components/Index'

import CompIndex from './components/CompInfo/Index'

import CompInfo from './components/CompInfo/Info'

import EditCompInfo from './components/CompInfo/Edit'

import JobManage from './components/JobManage/Index'

import JobReq from './components/JobReq'

import BasicInfo from './components/BasicInfo'

import ResumePlant from './components/ResumePlant'

import PersonalInfo from './components/PersonalInfo'

import CvSearch from './components/CvSearch/Index'

var router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/index': {
    component: Index
  },
  '/comp/:compId': {
    component: CompIndex,
    subRoutes: {
      '/': {
        component: CompInfo
      },
      '/edit': {
        component: EditCompInfo
      }
    }
  },
  '/job_manage': {
    component: JobManage
  },
  '/job_req': {
    component: JobReq
  },
  '/basic_info': {
    component: BasicInfo
  },
  '/resume_plant': {
    component: ResumePlant
  },
  '/personal_info': {
    component: PersonalInfo
  },
  '/cv_search': {
    component: CvSearch
  }
})
router.redirect({
  '*': '/index'
})
router.start(App, 'body')
