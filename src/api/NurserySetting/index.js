import urls from './urls'
import Service from '@/utils/fetch'
// axios
// https://www.jianshu.com/p/86122178002a

export function _getMeals(parmas) {
  return Service({
    url: urls.getMeals,
    parmas
  })
}


export function _saveMeals(parmas) {
  return Service({
    method: 'post',
    url: urls.saveMeals,
    params
  })
}

export function _editMeals(parmas) {
  return Service({
    method: 'post',
    url: urls.editMeals,
    params
  })
}

export function _mealsRemind() {
  return Service({
    method: 'post',
    url: urls._mealsRemind,
    params
  })
}
export function _saveMealsRemind(parmas) {
  return Service({
    method: 'post',
    url: urls._saveMealsRemind,
    params
  })
}
