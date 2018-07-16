/* eslint-disable no-cond-assign,no-useless-escape */
export function setCookie (name, value) {
  let Days = 7
  let exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

export function getCookie (name) {
  let arr
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return null
  }
}

export function delCookie (name) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

export function clearCookie () {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g)
  if (keys) {
    for (let i = keys.length; i--;) {
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  }
}

export function getQueryString (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURIComponent (r[2])
  return null
}

export function getQueryStr (url, ref) {
  let str = url.substr(url.indexOf('?') + 1)
  if (str.indexOf('&') !== -1) {
    let arr = str.split('&')
    for (let i in arr) {
      if (arr[i].split('=')[0] === ref) {
        return arr[i].split('=')[1]
      }
    }
  } else {
    return url.substr(url.indexOf('=') + 1)
  }
}

export function setQueryStr (url, ref, value) {
  let str = ''
  if (url.indexOf('?') !== -1) {
    str = url.substr(url.indexOf('?') + 1)
  } else {
    return url + '?' + ref + '=' + value
  }
  let returnurl = ''
  let setparam = ''
  let arr
  let modify = '0'
  if (str.indexOf('&') !== -1) {
    arr = str.split('&')
    for (let i in arr) {
      if (arr[i].split('=')[0] === ref) {
        setparam = value
        modify = '1'
      } else {
        setparam = arr[i].split('=')[1]
      }
      returnurl = returnurl + arr[i].split('=')[0] + '=' + setparam + '&'
    }
    returnurl = returnurl.substr(0, returnurl.length - 1)
    if (modify === '0') {
      if (returnurl === str) {
        returnurl = returnurl + '&' + ref + '=' + value
      }
    }
  } else {
    if (str.indexOf('=') !== -1) {
      arr = str.split('=')
      if (arr[0] === ref) {
        setparam = value
        modify = '1'
      } else {
        setparam = arr[1]
      }
      returnurl = arr[0] + '=' + setparam
      if (modify === '0') {
        if (returnurl === str) {
          returnurl = returnurl + '&' + ref + '=' + value
        }
      }
    } else {
      returnurl = ref + '=' + value
    }
  }
  return url.substr(0, url.indexOf('?')) + '?' + returnurl
}

export function delQueryStr (url, ref) {
  let str = ''
  if (url.indexOf('?') !== -1) {
    str = url.substr(url.indexOf('?') + 1)
  } else {
    return url
  }
  let arr = ''
  let returnurl = ''
  // let setparam = ''
  if (str.indexOf('&') !== -1) {
    arr = str.split('&')
    for (let i in arr) {
      if (arr[i].split('=')[0] !== ref) {
        returnurl = returnurl + arr[i].split('=')[0] + '=' + arr[i].split('=')[1] + '&'
      }
    }
    return url.substr(0, url.indexOf('?')) + '?' + returnurl.substr(0, returnurl.length - 1)
  } else {
    arr = str.split('=')
    if (arr[0] === ref) {
      return url.substr(0, url.indexOf('?'))
    } else {
      return url
    }
  }
}

// 使用
// preloadimages(imagesarray).done(function () {
 // 图片加载完成后的操作
// })
export function preloadImgs (imgArr) {
  let newimages = []
  let loadedimages = 0
  let postaction = function () {}
  let imgs = ((typeof imgArr !== 'object') ? [imgArr] : imgArr)
  function imageloadpost () {
    loadedimages++
    if (loadedimages === imgs.length) {
      postaction(newimages)
    }
  }
  for (let i = 0; i < imgs.length; i++) {
    newimages[i] = new Image()
    newimages[i].src = imgs[i]
    newimages[i].onload = function () {
      imageloadpost()
    }
    newimages[i].onerror = function () {
      imageloadpost()
    }
  }
  return {
    done: function (f) {
      postaction = f || postaction
    }
  }
}

export function IsPC () {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export function getValue (key) {
  if (!window) return
  return window.localStorage.getItem(key)
}

export function setValue (key, value) {
  if (!window) return
  window.localStorage.setItem(key, value)
}

export function checkEmail (email) {
  if (!email) {
    return false
  }
  var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return re.test(email)
}

export function checkMobile (telephone) {
  if (!telephone) {
    return false
  }
  var re = /^1\d{10}$/
  return re.test(telephone)
}
