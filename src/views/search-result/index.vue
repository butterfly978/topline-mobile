<template>
  <div class="search-result">
    <!-- 顶部导航 -->
    <van-nav-bar title="搜索结果" left-text="返回" left-arrow fixed @click-left="$router.back()" />
    <!-- /顶部导航 -->
    <!-- 文章列表 -->
    <van-list class="article-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in articles" :key="item.art_id.toString()" :title="item.title"/>
    </van-list>
    <!-- /文章列表 -->
  </div>
</template>

<script>
import { getSearch } from '@/api/search'
export default {
  name: 'SearchResult',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      perPage: 10,
      articles: []
    }
  },
  computed: {
    q () {
      return this.$route.params.q
    }
  },
  async created () {
    const data = await getSearch({
      q: this.$route.params.q,
      page: 1
    })
    console.log(data)
  },
  methods: {
    async onLoad () {
      await this.$sleep(800)
      const data = await this.getSearchResults()
      // 如果请求结果数组为空，则设置List组件已加载结束
      if (!data.results.length) {
        this.loading = false
        this.finished = true
        return
      }
      // 如果有数据，则将本次加载到的数据push到列表数组中
      this.articles.push(...data.results)
      // 数据加载完毕，更新当前页码为下一页，用于下一次加载更多
      this.page += 1
      // 结束当前加载的loading
      // List 列表组件每次onLoad会自动将loading设置为true
      // 如果你不设置的话，他不会触发下一次的onLoad
      this.loading = false
    },
    getSearchResults () {
      return getSearch({
        page: this.page,
        perPage: this.perPage,
        q: this.q
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search-result {
  .article-list {
    margin-top: 92px;
  }
}
</style>
