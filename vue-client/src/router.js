import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/SignUp.vue')
    },
    {
      path: '/admindashboard',
      name: 'AdminDashbard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AdminDashboard.vue'),
      beforeEnter: (to, from, next) => {
        store
          .dispatch('auth/authenticate')
          .then(res => {
            const superAdmin = res.user.permissions.find(
              v => v === 'super-admin'
            )
            const admin = res.user.permissions.find(v => v === 'admin')
            if (superAdmin === 'super-admin' || admin === 'admin') {
              next()
            } else next({ path: '/' })
          })
          .catch(error => {
            if (!error.message.includes('Could not find stored JWT')) {
              console.error(error)
              next({ path: '/' })
            }
          })
      }
    }
  ]
})
