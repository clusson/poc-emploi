import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Declare from '@/components/Declare'
import Emotion from '@/components/Emotion'

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
      path: '/emotion',
      name: 'Emotion',
      component: Emotion
    }
  ]
})