import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  computed: {
    ...mapState({
      UnitManagement: 'UnitManagement',
    })
  },
  methods: {
    ...mapActions({
      getStudentList: 'UnitManagement/getStudentList'
    }),
    ...mapMutations({
      // navtab当前index
      SETNAVACTIVE: 'UnitManagement/SETNAVACTIVE',
      // 请求时禁用组件
      SETTABLELOADING: 'UnitManagement/SETTABLELOADING',
      // 重置右侧划框form表单数据
      RESETRULEFORMSLIDERBOX: 'UnitManagement/RESETRULEFORMSLIDERBOX',
      // 设置右侧划框form表单数据
      SETRULEFORMSLIDERBOX: 'UnitManagement/SETRULEFORMSLIDERBOX',
      SETOPTIONS: 'UnitManagement/SETOPTIONS'
    }),
    ...mapActions({
      getList: 'UnitManagement/getList'
    })

  }

}
