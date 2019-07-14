/**
 * 搜索相关数据接口
 */
import request from '@/utils/request'
/**
 * 获取联想建议（自动补全）
 */
export const getSuggestion = q => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}
