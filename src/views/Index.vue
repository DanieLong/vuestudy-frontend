<template>
  <div>
    <h1>可以的</h1>
  </div>
</template>

<script>
// import Layout from '../components/common/Layout.vue'
// import { findUserMenu } from '../services/permission'
import { LocalStorage } from '../tools/storage'
import { Auth } from '../tools/auth'
import axios from 'axios'
export default {
  name: 'index',
  data() {
    return {}
  },
  //进入主页之前验证token是否有效，无效的话进入登录页面
  beforeCreate() {
    axios
      .get('api/user/testToken', Auth.setHeader())
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
        }
        this.$router.push({ name: 'login' })
      })

    this.getUserMenu
  },

  methods: {
    getUserMenu: function(data) {
      axios.get('/api/permission/getUserMenu', data, Auth.setHeader()).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style></style>
