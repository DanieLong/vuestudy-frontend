<template>
  <div>
    <!-- <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180"></el-table-column>
      <el-table-column prop="lastLoginTime" label="上次登录时间"></el-table-column>
      <el-table-column prop="userStatus" label="状态" :formatter="statusFomatter"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>-->
    <div>
      <!-- 查询条件 每个页面查询条件都不太相似 不好提出来公用组件 -->
      <el-container>
        <div class="queryCondition"></div>
      </el-container>
    </div>
    <tableComponets :tableInit="table1" ref="tableComponets" />
    <pagination :pageModel="pageModel" ref="pagination" />
  </div>
</template>

<script>
// import { UserService } from '../services/user'
import { Auth } from '../tools/auth'
import axios from 'axios'
import tableComponets from '../components/TableComponets.vue'
import pagination from '../components/Pagination.vue'
export default {
  name: 'user',
  components: { tableComponets, pagination },
  data() {
    return {
      user: {},
      tableData: [],
      pageModel: {
        //总条数
        total: 50,
        //当前页码
        currentPage: 1,
        url: '',
        args: ''
      },
      table1: {
        role: { update: true, del: true },
        title: [
          { label: '用户名', prop: 'username' },
          { label: '昵称', prop: 'nickname' },
          { label: '上次登录时间', prop: 'lastLoginTime' },
          { label: '状态', prop: 'userStatus' }
        ],
        tableData: []
      }
    }
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    getUserList: function() {
      // let data = UserService.getUserList()
      // console.log(data)
      axios
        .get('/api/user/getList', Auth.setHeader())
        .then(res => {
          let data = res.data.data
          // console.log(data.data)
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            this.tableData.push(data[i])
            this.table1.tableData.push(data[i])
          }
        })
        .catch(err => {
          console.log(err)
        })
      // console.log('userData:' + userData.data)
      // return userData.data
    },
    statusFomatter: function(row) {
      // console.log('row:' + row)
      if (row['userStatus'] == 1) {
        return '启用'
      } else if (row['userStatus'] == 0) {
        return '未启用'
      }
      return '未知'
    }
  }
}
</script>

<style >
.queryCondition {
  margin-top: 5%;
  background-color: azure;
}
</style>