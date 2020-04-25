import Mock from 'mockjs'
console.log('mock')
Mock.setup({
  timeout: 1000
})
Mock.mock('http://localhost:3000/dev-api/test', 'get', {
  test: '111'
})
