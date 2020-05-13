import request from '@/utils/request'

export function getloading(data) {
  return request({
    url: '/api/getmsg',
    method: 'post',
    data
  })
}
