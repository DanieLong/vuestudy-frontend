<template>
  <el-container>
    <el-aside width="240px">
      <el-tree :data="menu" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
    </el-aside>
    <el-container>
      <el-header height="90px">Header</el-header>
      <el-main>
        <div style="height:800px"></div>
      </el-main>
      <el-footer height="80px">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
// import Layout from '../components/common/Layout.vue'
import { transData } from '../services/permission'
import { LocalStorage } from '../tools/storage'
import { Auth } from '../tools/auth'
import axios from 'axios'
export default {
  name: 'index',
  data() {
    return {
      menu: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  //进入主页之前验证token是否有效，无效的话进入登录页面
  beforeCreate() {
    axios
      .get('api/user/testToken', Auth.setHeader())
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        if (err.response.status == 401 || err.response.status == 403) {
          LocalStorage.clear()
        }
        this.$router.push({ name: 'login' })
      })
    // alert('创建完毕')
  },
  created() {
    this.getUserMenu()
  },
  methods: {
    getUserMenu: function() {
      axios
        .get('/api/permission/getUserMenu', Auth.setHeader())
        .then(res => {
          let menuData = res.data.data
          this.menu = this.makeTree(menuData)
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleNodeClick(data) {
      console.log(data)
    },
    makeTree: function(data) {
      let transdata = transData(data, 'id', 'pid', 'children')
      // console.log(transdata)
      return transdata
    }
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 120px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 800px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /*  line-height: 800px; */
}

body > .el-container {
  margin-bottom: 40px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
