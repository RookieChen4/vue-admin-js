import Mock from 'mockjs'
Mock.setup({
  timeout: 5000
})
Mock.mock('http://localhost:3000/dev-api/test', 'get', {
  test: '111'
})

Mock.mock('http://localhost:3000/api/login', 'post', {
  code: 200,
  token: '111'
})

Mock.mock('http://localhost:3000/api/logout', 'post', {
  code: 200,
  token: '111'
})

Mock.mock('http://localhost:3000/api/getmsg', 'post', {
  code: 200,
  token: 'msg'
})
