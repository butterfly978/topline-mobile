<template>
  <div>
    <van-nav-bar title="个人信息" left-text="返回" right-text="保存" left-arrow @click-left="$router.back()" @click-right="handleSave"/>
    <van-cell-group>
      <van-cell title="头像" is-link @click="handleShowFile">
        <div slot="default">
          <img width="30" :src="user.photo" alt="">
        </div>
        <input ref="file" style="display: none;" type="file">
      </van-cell>
      <van-cell title="昵称" :value="user.name" is-link />
      <van-cell title="性别" :value="user.gender" is-link />
      <van-cell title="生日" :value="user.birthday" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { getUserProfile, updateUserProfile } from '@/api/user'
export default {
  name: 'UserSettings',
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.loadUser()
  },
  mounted () {
    this.$refs['file'].addEventListener('change', this.handleFileChange)
  },
  methods: {
    handleFileChange () {
      const file = this.$refs['file'].files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => {
        this.user.photo = reader.result
      })
    },
    async loadUser () {
      try {
        this.user = await getUserProfile()
      } catch (err) {
        this.$toast.fail('加载用户信息失败')
      }
    },
    async handleSave () {
      try {
        const data = await updateUserProfile(this.user)
        console.log(data)
        this.$toast('更新成功')
      } catch (err) {
        this.$toast.fail('更新用户信息失败')
      }
    },
    handleShowFile () {
      this.$refs['file'].click()
    }
  }
}
</script>

<style>

</style>
