import {
  _getMeals
} from '@/api/NurserySetting'
import {
  catchErr
} from '@/utils/utils'

export default {
  async getStudentList({
    commit,
    state
  }, parmas = state.ruleFormSlideRBox) {
    // 编辑传动态id | 添加传0
    if (!parmas.id) {
      commit('SETTABLELOADING', true)
      let [err, res] = await catchErr(_getMeals());
      commit('SETTABLELOADING', false)
      if (res) {
        commit('SETDATA', res)
      };
    } else {
      const info = {
        id: parmas.id
      };
      let [err, res] = await catchErr(_getMeals(info));
      if (err) {
        this.$message.error(err || '错了哦，系统异常');
      } else if (res) {
        let {
          id,
          food_name,
          price,
          food_content
        } = res.data;
        let parmas = {
          id,
          food_name,
          price,
          food_content
        }
        commit('SETRULEFORMSLIDERBOX', parmas)
      }
    }
  }

}
