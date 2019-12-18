<template>
  <layout />
</template>

<script>
import { Auth } from '../tools/auth'
import Layout from '../components/common/Layout.vue'
export default {
  name: 'home',
  components: { Layout },
  beforeCreate: function() {
    let userInfo = Auth.checkUser('userInfo')
    if (null == userInfo || '' == userInfo) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style></style>
