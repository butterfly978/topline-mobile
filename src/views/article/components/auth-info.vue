<template>
  <div class="auth-info">
    <div class="base-info">
      <img class="avatar" src="http://toutiao.meiduo.site/FkTXjvBkdM-pE9gQSzFjXlE7cIbY" alt="">
      <div>
        <p>阳光新闻</p>
        <p>1小时前 阳光新闻官方账号</p>
      </div>
    </div>
    <div>
      <van-button type="danger">关注</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthInfo',
  props: {},
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.auth-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  .base-info {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
}
</style>
