import Mock from "mockjs"

function getMockData(url, data) {
  const pathUrl = 'http://localhost:8080/'
  return Mock.mock(`${pathUrl}${url}`, data)
}
export default getMockData