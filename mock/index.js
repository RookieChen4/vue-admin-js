import Mock from 'mockjs'
Mock.setup({
  timeout: 1000
})
Mock.mock('http://localhost:3000/dev-api/test', 'get', {
  test: '111'
})

Mock.mock('http://localhost:3000/api/login', 'post', {
  code: 200,
  token: '111'
})

