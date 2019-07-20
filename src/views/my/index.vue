<template>
  <div>
    <un-login v-if="!$store.state.user"/>
    <user-info v-else/>
    <app-tabbar/>
  </div>
</template>

<script>
import UnLogin from './components/un-login'
import UserInfo from './components/user-info'
export default {
  name: 'MyIndex',
  components: {
    UnLogin,
    UserInfo
  }
}
</script>

<style lang="less" scoped></style>
