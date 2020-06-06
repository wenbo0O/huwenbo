import Vue from 'vue'
export default {
  created: function() {
    //  获取文件夹里内容
    const requireComponent = require.context('./components', false, /\.vue$/)

    requireComponent.keys().forEach(filePath => {
      // 引入具体文件
      const componentConfig = requireComponent(filePath)
      // 获取名称
      const componentName = filePath.replace('./', '').replace('.vue', '')
      // 注册组件
      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}
