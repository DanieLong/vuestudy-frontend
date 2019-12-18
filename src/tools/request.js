import axios from 'axios'
import * as spin from './spin'

function checkData(res) {
  spin.hide()
  if (res.status === 200 && res.data.code === '200') {
    return res.data.data
  } else if (res.status === 200 && (res.data.code === '-2' || res.data.code === '500')) {
    return res.data
  }

  let error = new Error(res.data.message)
  throw error
}

function errorHandler(err) {
  spin.hide()
  throw err
}

export default function request(option) {
  spin.show()
  return axios(option)
    .then(checkData)
    .catch(errorHandler)
}
