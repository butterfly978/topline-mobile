/**
 * 评论接口模块
 */
import request from '@/utils/request'
/**
 * 获取文章|评论的评论列表
 */
export const getComments = ({
  source, // 源id，文章id或评论id
  offset = null, // 如果数据为 null，则 axios 不会发送这个字段
  limit = 10, // 每页大小
  isArticle = true // true 获取文章的评论，false 获取评论的回复，默认获取文章的评论
}) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params: {
      type: isArticle ? 'a' : 'c', // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
      source, // 源id，文章id或评论id
      offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
      limit // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
    }
  })
}
