<template>
  <div>
    <el-table :data="data" stripe style="width: 100%">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <div v-for="t in title" :key="t.label">
        <el-table-column :prop="t.prop" :label="t.label"></el-table-column>
      </div>
      <el-table-column label="操作">
        <el-button-group>
          <template slot-scope="scope">
            <el-container>
              <div v-if="role['update']">
                <el-button type="primary" icon="el-icon-edit" circle @click="edit(scope.$row)"></el-button>
              </div>
              <div v-if="role['del']">
                <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.$row)"></el-button>
              </div>
            </el-container>
          </template>
        </el-button-group>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  //简单一行表格
  name: 'tableComponets',
  components: {},
  props: {
    tableInit: {
      //列信息
      title: Array,
      //内容信息
      tableData: Array,
      role: Object
    }
  },
  data() {
    return {
      title: [],
      data: [],
      role: {}
    }
  },
  created() {
    // let colmnus = this.table.coulmnData
    // for (let c of colmnus) {
    //   console.log(c)
    // }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData: function() {
      this.title = this.tableInit.title
      this.data = this.tableInit.tableData
      this.role = this.tableInit.role
    },

    //日期格式化
    dateFomatter: function() {},
    //数字格式化
    numberFomatter: function() {},
    //编辑数据
    edit: function(row) {
      console.log(row)
      return row
    },
    //删除数据
    delData: function(row) {
      console.log(row)
      return row
    }
  }
}
</script>