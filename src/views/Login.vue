<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入用户名" v-model="user.username" clearable />
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入密码" v-model="user.password" show-password />
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4">
        <el-button-group>
          <el-button type="primary" v-on:click="submit">提交</el-button>
          <el-button type="warning">重置</el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { LocalStorage } from '../tools/storage'
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  watch: {
    // username: function() {
    //   //    console.log(this.username)
    // },
    // password: function() {
    //   //  console.log(this.password)
    // }
  },
  methods: {
    submit: function() {
      // alert(this.user.username)
      let data = JSON.stringify(this.user)
      console.log(data)
      // let config = {
      //   headers: { ContentType: 'application/json' }
      // }
      axios
        .post('/api/login', data)
        .then(res => {
          if (res.status == 200) {
            // console.log(res.headers.authorization)
            LocalStorage.set('auth', res.headers.authorization)
            this.$router.push({ name: 'index' })
          }
        })
        .catch(err => {
          console.log(err)
          alert('登录失败，请重试')
        })
    }
  }
}
</script>

<style>
.el-row {
  margin-top: 10px;
}
</style>
