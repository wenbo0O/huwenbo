import Vue from 'vue'
export default {
  created: function () {
    // 账号管理
    const requireComponent = require.context('./components/AccountManagement', false, /\.vue$/)
    requireComponent.keys().forEach(filePath => {
      const componentConfig = requireComponent(filePath)
      const componentName = filePath.replace('./', '').replace('.vue', '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })


    // 告别厅管理
    const requireComponent2 = require.context('./components/HallManagement', false, /\.vue$/)
    requireComponent2.keys().forEach(filePath => {
      const componentConfig = requireComponent2(filePath)
      const componentName = filePath.replace('./', '').replace('.vue', '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })


    // 风俗信息管理
    const requireComponent3 = require.context('./components/CustomInfoManagement', false, /\.vue$/)
    requireComponent3.keys().forEach(filePath => {
      const componentConfig = requireComponent3(filePath)
      const componentName = filePath.replace('./', '').replace('.vue', '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })





  }
}
