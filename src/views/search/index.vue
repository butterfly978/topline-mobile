<template>
  <div>
    <van-search placeholoder="请输入搜索关键词" v-model="searchText" show-action/>
    <!-- 联想建议列表 -->
    <van-cell-group>
      <van-cell icon="search" v-for="item in suggestions" :key="item" :title="item" />
    </van-cell-group>
    <!-- /联想建议列表 -->
    <!-- 历史记录 -->
    <!-- <van-cell-group>
      <van-cell title="历史记录">
        <van-icon slot="right-icon" name="delete" style="line-height: inherit;"/>
      </van-cell>
    </van-cell-group> -->
    <!-- /历史记录 -->
  </div>
</template>

<script>
import { getSuggestion } from '@/api/search'
export default {
  name: 'SearchIndex',
  data () {
    return {
      searchText: '',
      suggestions: []
    }
  },
  watch: {
    async searchText (newVal) {
      newVal = newVal.trim() // 去除首尾空格
      // 如果数据为空，则什么都不做
      if (!newVal) {
        return
      }
      // 如果数据不为空，则请求联想建议自动补全
      const data = await getSuggestion(newVal)
      this.suggestions = data.options
    }
  }
}
</script>

<style lang="less" scoped></style>
