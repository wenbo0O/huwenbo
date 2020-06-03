/**
 * @desc 异常捕获
 * @param fn 回调函数
 * @returns null||err
 */
export const catchErr = promise => {
  return promise
    .then(function () {
      return [null, ...arguments]
    })
    .catch(err => {
      return [err, null]
    })
}


/**
 * @desc 判断系统类型
 * @returns true||false
 */
export const OSnow = () => {
  var agent = navigator.userAgent.toLowerCase();
  var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0 || agent.indexOf("windows") >= 0) {
    //your code
    return true
  }
  if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
    //your code
    return true
  }
  if (isMac) {
    //your code
    return false
  }
}


/**
 * @desc 工具类对象
 * @param obj 对象
 * @returns true||false
 */
export const Tools = {
  isArray: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  isObject: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  },
  isNumber: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  },
  isString: function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  },
  isFunction: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  },
  isBoolean: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
  },
  isNull: function (obj) {
    return obj == null || obj == '' || obj == undefined;
  },
  isNotNull: function (obj) {
    return !this.isNull(obj);
  },
  randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }
};
