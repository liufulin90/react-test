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
      component: require('../views/Map/').default
    },
    {
      path: '/work',
      component: require('../views/Work/').default
    },
    {
      path: '/games',
      component: require('../views/Games/').default
    },
    {
      path: '/canvas/firework',
      component: require('../views/Games/').FireWorkView
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
