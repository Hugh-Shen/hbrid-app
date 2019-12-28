import axios from 'axios'

// axios.defaults.baseURL = 'localhost:8080'
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  } 
)
axios.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  error => {
    return responseStatus(error)
  }
)

function responseStatus(error) {
  if(error.response.status) {
    switch(error.response.status) {
      case 401: router.replace({
        path: '/',
        query: { 
          redirect: router.currentRoute.fullPath 
        }
      })
      break;
      default: Promise.reject('失败')
    }
    return Promise.reject(error.response)
  }
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  )
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  )
}
