import Mock from "mockjs"

function getMockData(url, data, method) {
  const pathUrl = 'http://localhost:8080/'
  if(method) {
    return Mock.mock(`${pathUrl}${url}`, method, data)
  }
  return Mock.mock(`${pathUrl}${url}`, data)
}
export default getMockData