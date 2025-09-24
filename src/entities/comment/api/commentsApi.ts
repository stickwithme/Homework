import { baseApi } from '../../../shared/api/baseApi'
export interface Comment { id:number; postId:number; name:string; email:string; body:string }

export const commentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCommentsByPost: build.query<Comment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result, error,postId) => [{ type:'Comments', id: postId }],
    })
  })
})
export const { useGetCommentsByPostQuery } = commentsApi
