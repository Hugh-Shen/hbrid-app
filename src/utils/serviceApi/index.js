import {get, post} from '@utils/request/http.js'

export async function getTheRequiredData(url, data = {}) {
  const method = data.method ? (data.method == 'post' ? post : get) : get
  let resData = await method(url).then(res => res.data)
  return  resData
}