export default {
  // 请求时禁用组件
  SETTABLELOADING(state, res) {
    state.tableLoading = res
  },

  // navtab当前index
  SETNAVACTIVE(state, res) {
    state.numTableActiveIndex = res;
  },

  // 改变table的数据
  SETDATA(state, res) {
    state.data = res.data || {};
  },

  // 重置右侧划框form表单数据
  RESETRULEFORMSLIDERBOX(state) {
    state.ruleFormSlideRBox = {
      id: 0, // 当前餐点数据id
      food_name: "",
      price: "",
      food_content: ""
    };
  },

  // 设置右侧划框form表单数据
  SETRULEFORMSLIDERBOX(state, obj) {
    state.ruleFormSlideRBox = obj || {};
  },

  SETOPTIONS(state, res) {
    Object.keys(res).forEach(item => (state[item] = res[item]))
  },

  // navtab当前index
  SETNAVACTIVE(state, res) {
    state.numTableActiveIndex = res;
  },


}
