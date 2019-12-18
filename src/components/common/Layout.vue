<template>
  <el-container>
    <headers/>
      <el-container>
        <el-aside width="35%"></el-aside>
        <el-main>这是主要内容</el-main>
      </el-container>

      <el-footer></el-footer>
  </el-container>

</template>

<script>
import Headers from './Headers.vue'
// import Left from './Left.vue';
// import Footer from './Footer.vue';


export default {
  name: 'layout',
  components: {
    Headers
  }
}
</script>

<style>
</style>
