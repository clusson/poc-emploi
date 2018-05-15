import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Declare from '@/components/Declare'
import Success from '@/components/Success'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/declare',
      name: 'Declare',
      component: Declare
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
