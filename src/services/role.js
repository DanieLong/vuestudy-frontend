import request from '../tools/request'
import { httpUrlFormater } from '@/tools/commonService'

export function add(data) {
  return request({
    method: 'get',
    url: httpUrlFormater('/role/getUserRole', data)
  })
}
