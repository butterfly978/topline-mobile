/**
 * 文章相关接口封装模块
 */
import request from '@/utils/request'
export const getArticles = ({
  channelId, // 频道
  timestamp, // 时间戳，用于获取分页数据
  withTop // 是否置顶
}) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params: {
      channel_id: channelId,
      timestamp,
      with_top: withTop
    }
  })
}
/**
 * 举报文章
 */
export const reportArticle = ({
  articleId,
  type,
  remark
}) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/reports',
    data: {
      target: articleId,
      type: Number.parseInt(type),
      remark
    }
  })
}
/**
 * 获取文章详情
 */
export const getArticleDetail = articleId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}
/**
 * 点赞
 */
export const likeArticle = articleId => {
  return request({
    method: 'POST',
    url: `/app/v1_0/article/likings`,
    data: {
      target: articleId
    }
  })
}
/**
 * 取消点赞
 */
export const unLikeArticle = articleId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/likings/${articleId}`
  })
}
/**
 * 对文章不喜欢
 */
export const dislikeArticle = articleId => {
  return request({
    method: 'POST',
    url: `/api/v1_0/article/dislikes`,
    data: {
      target: articleId
    }
  })
}
/**
 * 取消对文章不喜欢
 */
export const unDislikeArticle = articleId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/dislikes/${articleId}`
  })
}
