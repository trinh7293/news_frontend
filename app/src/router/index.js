import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import News from '@/components/News'
// import Medium from '@/components/Medium'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: News
    }
    // {
    //   path: '/24h',
    //   name: '24h',
    //   component: web24h
    // },
    // {
    //   path: '/medium',
    //   name: 'Medium',
    //   component: Medium
    // }
  ]
})
