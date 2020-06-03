export default {
  // 获取餐点信息
  getMeals: '/Business/ApiMealsSet/getMeals',

  /**
   * 设置餐点信息
   *  编辑传动态id
   *  添加id传0
   */
  saveMeals: '/Business/ApiMealsSet/saveMeals',

  /**
   * 修改餐点信息状态
   *  上下架和删除同一个接口
   *  传需要变更状态的值
   */
  editMeals: '/Business/ApiMealsSet/editMeals',

  // 获取餐费月订单设置信息
  mealsRemind: '/Business/ApiMealsSet/mealsRemind',

  // 设置餐费月订单设置信息
  saveMealsRemind: '/Business/ApiMealsSet/saveMealsRemind',

}
