<template>
  <div>
    <van-nav-bar title="个人信息" left-text="返回" right-text="保存" left-arrow @click-left="$router.back()" @click-right="handleSave"/>
    <van-cell-group>
      <van-cell title="头像" value="内容" />
      <van-cell title="昵称" value="内容" />
      <van-cell title="介绍" value="内容" />
      <van-cell title="性别" value="内容" />
      <van-cell title="生日" value="内容" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'UserSettings',
  data () {
    return {}
  },
  methods: {
    handleSave () {

    }
  }
}
</script>

<style>

</style>
