const routes = {
  path: '/',
  component: require('../layouts/App').default,
  indexRoute: {
    component: require('../components/Welcome').default
  },
  childRoutes: [
    {
      path: '/home',
      component: require('../views/Home/').default
    },
    {
      path: '/msgList',
      component: require('../components/Msg/').default
    },
    {
      path: '/map',
      component: require('../components/Map/').default
    },
    {
      path: '/work',
      component: require('../components/Work/').default
    },
    {
      path: 'redirect',
      component: require('../components/Redirect').default
    },
    {
      path: '*',
      component: require('../components/404').default
    }
  ]
}

export default routes
