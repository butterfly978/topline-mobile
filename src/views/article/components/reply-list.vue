<template>
  <van-popup :value="value" @input="$emit('input', $event)" position="bottom" :style="{ height: '95%' }" @close="handleClose" @open="handleOpen">
    <comment-list ref="comment-list" :source="commentId" :isArticle="false" />
  </van-popup>
</template>

<script>
import CommentList from './comment-list'
export default {
  name: 'ReplyList',
  components: {
    CommentList
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    commentId: {
      type: [Number, String]
    }
  },
  data () {
    return {}
  },
  created () {},
  activated () {
    console.log('activated')
  },
  methods: {
    handleClose () {
      // refs 有两个作用：
      // 1. 获取 DOM
      // 2. 获取一个组件
      // 最简单粗暴的方式：直接通过 ref 拿到这个组件本身，操作里面的数据得到你想要的结果
      this.$refs['comment-list'].comments = []
      this.$refs['comment-list'].finished = false
      this.$refs['comment-list'].offset = null
    },
    handleOpen () {
      this.$refs['comment-list'].onLoad()
      // this.$refs['comment-list'].loading = true
    }
  }
}
</script>

<style lang="less" scoped></style>
