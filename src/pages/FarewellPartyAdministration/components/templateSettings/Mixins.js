import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  computed: {
    ...mapState({
      NurserySetting: 'NurserySetting',
    })
  },
  methods: {
    ...mapActions({
      getStudentList: 'NurserySetting/getStudentList'
    }),
    ...mapMutations({
      // navtab当前index
      SETNAVACTIVE: 'NurserySetting/SETNAVACTIVE',
      // 请求时禁用组件
      SETTABLELOADING: 'NurserySetting/SETTABLELOADING',
      // 重置右侧划框form表单数据
      RESETRULEFORMSLIDERBOX: 'NurserySetting/RESETRULEFORMSLIDERBOX',
      // 设置右侧划框form表单数据
      SETRULEFORMSLIDERBOX: 'NurserySetting/SETRULEFORMSLIDERBOX',
      SETOPTIONS: 'NurserySetting/SETOPTIONS'
    }),
    ...mapActions({
      getList: 'NurserySetting/getList'
    })

  }

}
