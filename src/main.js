// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { config } from './utils/config'

import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

import heatmap from 'vue-heatmapjs'
import io from 'socket.io-client'

Vue.use(Vuetify)

const socket = io.connect(config.socketio.uri)
Vue.use(heatmap, {

  afterAdd(data) {
    const mouseEvent = {
      clientX: data.clientX,
      clientT: data.clientY,
      layerX: data.layerX,
      layerY: data.layerY,
      movementX: data.movementX,
      movmementY: data.movementY,
      offsetX: data.offsetX,
      offsetY: data.offsetY,
      pageX: data.pageX,
      pageY: data.pageY,
      screenX: data.screenX,
      screenY: data.screenY,
      URI: data.target.baseURI,
      type: data.type,
      value: data.value,
      x: data.x,
      y: data.y

    }
    socket.emit('feed', mouseEvent)
  }
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
