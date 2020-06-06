export default {
  data: [],
  // navtab当前index
  numTableActiveIndex: 0,
  // 请求时禁用组件
  tableLoading: true,
  // 新增餐点右侧弹窗数据Start
  showPrintPage: false, // 显示/隐藏
  ruleFormSlideRBox: {
    id: 0, // 当前餐点数据id
    food_name: "餐点名称aaa",
    price: "单价2.00",
    food_content: "<p>富文本</p>"
  }, // 表单数据
  submitFormLoading: false, // 滑框提交按钮
  rightPopTitle: "", // 滑框标题


  // new
  indexAccountManagement: 0, // 账号管理切换
  indexHallManagement: 0, // 告别厅管理切换
  indexCustomInfoManagement: 0, // 风俗信息管理切换

}
