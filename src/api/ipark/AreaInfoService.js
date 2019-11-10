/**
 * 访问记录
 */
import request from '@/utils/request'
export default {

  /**
   * 查询
   */
  microList(data) {
    return request({
      url: '/api/ipark/area_info/query',
      method: 'POST',
      data
    })
  },
}
