import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import NurserySetting from '@/pages/NurserySetting'
import Login from '@/pages/Login' // 登录
import FarewellPartyAdministration from '@/pages/FarewellPartyAdministration' // 告别会管理
import UnitManagement from '@/pages/UnitManagement' // 单位管理
import AccountManagementView from '@/pages/UnitManagement/components/AccountManagement/ViewBox' // 单位管理 - 账号管理&新建
import HallManagementView from '@/pages/UnitManagement/components/HallManagement/ViewBox' // 单位管理 - 告别厅管理&新建
import CustomInfoView from '@/pages/UnitManagement/components/CustomInfoManagement/ViewBox' // 单位管理 - 风俗信息&新建编辑查看




export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'NurserySetting',
      component: NurserySetting
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/FarewellPartyAdministration',
      name: 'FarewellPartyAdministration',
      component: FarewellPartyAdministration
    },
    {
      path: '/Unit',
      name: 'UnitManagement',
      component: UnitManagement,
      redirect: '/Unit/AccountManagementView',
      children: [{
        path: '/Unit/AccountManagementView',
        name: 'AccountManagementView',
        component: AccountManagementView
      }, {
        path: '/Unit/HallManagementView',
        name: 'HallManagementView',
        component: HallManagementView
      }, {
        path: '/Unit/CustomInfoView',
        name: 'CustomInfoView',
        component: CustomInfoView,
        meta: {
          title: "风俗信息管理"
        }
      }]
    }


  ]
})
