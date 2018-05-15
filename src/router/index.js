import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import Declare from '@/components/Declare'
import Success from '@/components/Success'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
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
