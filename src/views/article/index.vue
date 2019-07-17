<template>
  <div class="article-wrap">
    <van-nav-bar title="黑马头条" left-text="返回" left-arrow @click-left="$router.back()" />
    <h2 class="article-title">文章标题</h2>
    <AuthInfo class="auth-info" />
    <div class="article-content">
      <p>hello world</p>
      <p>hello world</p>
      <p>hello world</p>
      <p>hello world</p>
      <p>hello world</p>
      <p>hello world</p>
      <p>hello world</p>
    </div>
    <MoreAction />
    <RecommendSearch />
    <RecommendArticle />
    <CommentList />
    <ReplyList />
    <WriteComment />
  </div>
</template>

<script>
import AuthInfo from './components/auth-info'
import CommentList from './components/comment-list'
import MoreAction from './components/more-action'
import RecommendArticle from './components/recommend-article'
import RecommendSearch from './components/recommend-search'
import ReplyList from './components/reply-list'
import WriteComment from './components/write-comment'

export default {
  name: 'ArticleIndex',
  components: {
    AuthInfo,
    CommentList,
    MoreAction,
    RecommendArticle,
    RecommendSearch,
    ReplyList,
    WriteComment
  }
}
</script>

<style lang="less" scoped>
.article-wrap {
  padding: 20px;
  .article-title {
    font-size: 50px;
    font-weight: 400;
  }
  .article-content {
    font-size: 24px;
  }
  .auth-info {
    position: sticky;
    top: 0;
    background: #fff;
  }
}
</style>
