import { apiUrl } from '../constants'
import { Ajax } from '../libs/keact'

export const postService = {
  getPosts (params: any, fn: (res: any) => void) {
    Ajax.call(this, `${apiUrl}/posts?page=${params.page}&per_page=${params.pagesize}`, 'get', {}, fn)
  }
}

