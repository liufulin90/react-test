const routes = {
  path: '/',
  component: require('../components/App').default,
  indexRoute: {
    component: require('../components/Welcome').default
  },
  childRoutes: [
    {
      path: '/msgList',
      component: require('../components/Msg/').default
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
