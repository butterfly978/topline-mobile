/**
 * 校验登录状态
 */
import store from '@/store'
import { Dialog } from 'vant'
import router from '@/router'
// 组件的使用方式
// 模板
// js this.$message

// checkLogin()

/**
 * 返回布爾值，表示是否已登录
 */
export default () => {
  const { user } = store.state
  if (user) {
    return true
  }
  // 如果没有登录，则表示“该操作需要登录”
  Dialog.confirm({
    title: '操作提示',
    message: '该操作需要登录，是否登录？'
  }).then(() => {
    // 用户点击确定，跳转到登录页
    router.push({
      name: 'login'
    })
    // 登录成功，返回之前的页面
  }).catch(() => {
  })
}
