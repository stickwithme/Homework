import { baseApi } from '../../../shared/api/baseApi'
import type { Post } from '../model/types'

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], number | void>({
      query: (userId) => userId ? `posts?userId=${userId}` : 'posts',
      providesTags: (result) =>
        result ? [
          ...result.map(p => ({ type: 'Post' as const, id: p.id })),
          { type: 'Posts' as const, id: 'LIST' }
        ] : [{ type: 'Posts' as const, id: 'LIST' }]
    }),
    getPostById: build.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error,id) => [{ type: 'Post', id }]
    }),
    addPost: build.mutation<Post, Partial<Post>>({
      query: (body) => ({ url:'posts', method:'POST', body }),
      invalidatesTags: [{ type:'Posts', id:'LIST' }]
    }),
    updatePost: build.mutation<Post, Partial<Post> & Pick<Post,'id'>>({
      query: ({id, ...patch}) => ({ url:`posts/${id}`, method:'PATCH', body: patch }),
      invalidatesTags: (result, error,{id}) => [{ type:'Post', id }]
    }),
    deletePost: build.mutation<{success:boolean; id:number}, number>({
      query: (id) => ({ url:`posts/${id}`, method:'DELETE' }),
      invalidatesTags: (result, error,id) => [{ type:'Post', id }, { type:'Posts', id:'LIST' }]
    })
  }),
})
export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = postsApi
