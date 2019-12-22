import axios from 'axios'
import { Auth } from '../tools/auth'
export let UserService = {
  //获取用户列表
  getUserList: function() {
    axios
      .get('/api/user/getList', Auth.setHeader())
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(err => {
        console.log(err)
        return ''
      })
  }
}
