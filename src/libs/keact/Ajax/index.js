import axios from 'axios'

export default function (url, method, params, fn, errFn) {
  return axios({
    url: url,
    method: method,
    data: params
  }).then((res) => {
    if (res.status) {
      fn(res.data)
    } else {
      if (errFn) {
        errFn(res)
      } else {
        console.log(res)
      }
    }
  }, (error) => {
    if (errFn) {
      errFn(error)
    } else {
      console.log(error)
    }
  })
}
