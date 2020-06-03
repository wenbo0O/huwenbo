import Vue from 'vue'
import Router from 'vue-router'
import NurserySetting from '@/pages/NurserySetting'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'NurserySetting',
    component: NurserySetting
  }]
})
