import Vue from 'vue'

export default {
  // 模板设置
  created: function () {
    //  获取文件夹里内容
    const requireComponent = require.context('./templateSettings', false, /\.vue$/)
    requireComponent.keys().forEach(filePath => {
      // 引入具体文件
      const componentConfig = requireComponent(filePath)
      // 获取名称
      const componentName = filePath.replace('./', '').replace('.vue', '')
      // 注册组件
      Vue.component(componentName, componentConfig.default || componentConfig)
    })

    // 相册管理
    const requireComponent2 = require.context('./photoSrttings', false, /\.vue$/)
    requireComponent2.keys().forEach(filePath => {
      const componentConfig = requireComponent2(filePath)
      const componentName = filePath.replace('./', '').replace('.vue', '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })

    // 审核管理
    const requireComponent3 = require.context('./auditManagement', false, /\.vue$/)
    requireComponent3.keys().forEach(filePath => {
      const componentConfig = requireComponent3(filePath)
      const componentName = filePath.replace('./', '').replace('.vue', '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}
