import Vue from 'vue'
import Vuex from 'vuex'
// huwenbo
// import ReservationRecordTab from './modules/ReservationRecordTab'
import NurserySetting from './modules/NurserySetting'
import Login from './modules/Login' // 登录页面
import UnitManagement from './modules/UnitManagement' // 单位管理

// import AddKPtemplate from './modules/AddKPtemplate' // 添加课评模板
// import Coupons from './modules/Coupons' // 发放优惠券


Vue.use(Vuex)
const state = {
  loading: false
}
// 全局loading
const mutations = {
  SETLOADING(state, payload) {
    // 变更状态
    state.loading = payload
  }
}
const store = new Vuex.Store({
  modules: {
    // huwenbo
    // ReservationRecordTab
    NurserySetting,
    Login,
    UnitManagement
    // AddKPtemplate
    // Coupons

  },
  state,
  mutations
})

export default store
