export function configRouter (router) {
  // normal routes
  router.map({

    '/index': {
      component: require('./components/Index.vue')
    },
    // 企业信息
    '/comp/:compId': {
      component: require('./components/compInfo/Index.vue')
    },
    // 职位管理
    '/jobs': {
      component: require('./components/jobs/Index.vue'),
      subRoutes: {
        '/': {
          component: require('./components/jobs/List.vue')
        },
        '/:jobId': {
          component: require('./components/jobs/detail/Index.vue')
        }
      }
    },
    // 高级搜索
    '/cv_search': {
      component: require('./components/cvSearch/Index.vue'),
      subRoutes: {
        '/': {
          component: require('./components/cvSearch/List.vue')
        }
      }
    },
    // 简历库
    '/resumes': {
      component: require('./components/resumes/Index.vue'),
      subRoutes: {
        '/': {
          component: require('./components/resumes/List.vue')
        },
        '/:resumeId': {
          component: require('./components/resumes/Detail.vue')
        }
      }
    },
    // 面试记录
    '/interview_record': {
      component: require('./components/interviewRecord/Index.vue'),
      subRoutes: {
        '/': {
          component: require('./components/interviewRecord/List.vue')
        }
      }
    },
    // 已入职
    '/enter_office': {
      component: require('./components/enterOffice/Index.vue'),
      subRoutes: {
        '/': {
          component: require('./components/enterOffice/List.vue')
        }
      }
    },
    // 人才库
    '/personnel': {
      component: require('./components/personnel/Index.vue'),
      subRoutes: {
        '/': {
          component: require('./components/personnel/List.vue')
        }
      }
    },
    // 交易记录
    '/trade_record': {
      component: require('./components/tradeRecord/Index.vue'),
      subRoutes: {
        '/': {
          component: require('./components/tradeRecord/List.vue')
        }
      }
    },
    // not found handler
    '*': {
      component: require('./components/NotFound.vue')
    }
  })

  // redirect
  router.redirect({
    '/': '/index'
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        // alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}
