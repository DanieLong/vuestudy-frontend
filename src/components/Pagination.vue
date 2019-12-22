<template>
  <div class="pageinationPos">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10,20,30,40,50,100]"
      :page-size="pageSize"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>


<script>
import axios from 'axios'
import { Auth } from '../tools/auth'
export default {
  name: 'pagination',
  data() {
    return {
      size: 20,
      pageSize: 20,
      total: 0,
      currentPage: 1
    }
  },
  props: {
    kk: Number,
    pageModel: {
      //总条数
      total: Number,
      //当前页码
      currentPage: Number,
      url: String,
      args: Object
    }
  },
  methods: {
    getPage: function(pageModel) {
      let config = Auth.setHeader()
      let data = { page: pageModel.page, size: pageModel.size, args: pageModel.args }
      axios
        .get(pageModel.url, data, config)
        .then(res => {
          console.log(res)
          return res.data
        })
        .catch(err => {
          console.log(err)
          return ''
        })
    },
    handleSizeChange: function(val) {
      //获得当页码大小
      console.log(val)
      this.size = val
      let currentSizeData = this.getPage(this.pageModel.url, this.pageModel.currentPage, this.pageModel.size, this.pageModel.args)
      return currentSizeData
    },
    handleCurrentChange: function(currentPage) {
      //获得当前页页码
      console.log(currentPage)
      //获得当前页面数据
      // let size = this.pageModel.size
      // let url = this.pageModel.url
      // let args = this.pageModel.args
      this.pageModel.currentPage = currentPage
      let currentPageData = this.getPage(this.pageModel)
      return currentPageData
    }
  },
  // prevClick: function(currentPage) {
  //   //上一页
  //   let prevPage = currentPage - 1
  //   let size = this.size
  //   let url = this.url
  //   let args = this.args
  //   let prevData = this.getPage(url, prevPage, size, args)
  //   return prevData
  // },
  // nextClick: function(currentPage) {
  //   //下一页
  //   let nextPage = currentPage + 1
  //   let size = this.size
  //   let url = this.url
  //   let args = this.args
  //   let nextData = this.getPage(url, nextPage, size, args)
  //   return nextData
  // }
  created() {
    this.total = this.pageModel.total
    this.currentPage = this.pageModel.currentPage
  }
}
</script>

<style>
.pageinationPos {
  width: 250px;
  margin-top: 30px;
  text-align: center;
}
/* .el-pagination {
  margin-left: 200px;
} */
</style>