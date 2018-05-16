import Vue from 'vue';
import Router from 'vue-router';
import Entry from '@/components/Entry';
import Declare from '@/components/Declare';
import Success from '@/components/Success';
import Emotion from '@/components/Emotion'
Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: '/emotion',
      name: 'Emotion',
      component: Emotion
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
});
