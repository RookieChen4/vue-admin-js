import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: '/api/logout',
    method: 'post',
    data
  })
}
