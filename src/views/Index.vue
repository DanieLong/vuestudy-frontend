<template>
  <div>
    <h1>可以的</h1>
  </div>
</template>

<script>
// import Layout from '../components/common/Layout.vue'
// import { findUserMenu } from '../services/permission'
import { LocalStorage } from '../tools/storage'
import axios from 'axios'
export default {
  name: 'index',

  //进入主页之前验证token是否有效，无效的话进入登录页面
  beforeCreate() {
    let config = {
      headers: { Authorization: LocalStorage.get('auth') }
    }
    axios
      .get('api/user/testToken', config)
      .then(res => {
        console.log(res.data)
        // findUserMenu({}).then(res => {
        //   if (res.code == null) {
        //     console.log('vv')
        //   }
        // })
      })
      .catch(err => {
        if (err.response.status == 401 || err.response.status == 403) {
          LocalStorage.clear()
          this.$router.push({ name: 'login' })
        }
      })
  },
  data() {
    return {}
  }
}
</script>

<style></style>
