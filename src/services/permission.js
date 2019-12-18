import request from '../tools/request'
import { httpUrlFormater } from '@/tools/commonService'

export function findUserMenu(data) {
  return request({
    method: 'get',
    url: httpUrlFormater('/use/getUserMenu', data)
  })
}

// export function addCar(data) {
//     return request({
//       method: 'post',
//       url: '/user/customer/addCar',
//       data: data
//     });
//   }
