export function debounce(func,delay){
    let timer = null
    return function (...args) {
      if (timer) clearTimeout (timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      },delay)
    } 
  }

  /**
 * 时间转换
 *  */  
export function formatDate(date, fmt) {
  /**
   * 获取年份
   * y+ -> 1个或多个y
   * if(匹配到的'yyyy'){
   * 匹配到的值 = 匹配到的值（匹配值，年份切割）//由切割后的年份替换匹配值
   * }
   * 数值+字符串 = 字符串
   * 
   */
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};


function padLeftZero (str) {
  //str = 4
  //0/04截取一位
  return ('00' + str).substr(str.length);
};