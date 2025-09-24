import { useMemo } from 'react'
import type { Post } from '../../../../entities/post/model/types'

import { useGetPostsQuery } from '../../../../entities/post/api/postsApi'

interface UsePostsParams {
  userId?: number
}

export function usePosts({ userId }: UsePostsParams = {}) {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery(userId)
  const filteredByUser = useMemo(() => {
    if (!userId) return posts
    return posts.filter(p => p.userId === userId)
  }, [posts, userId])
  return { posts: filteredByUser, loading: isLoading, error: isError ? 'Не удалось получить посты' : null }
}

