import { useEffect, useMemo, useState } from 'react'
import type { Post } from '../../../../entities/post/model/types'
import { mockPosts } from '../../../../lib/mocks/posts.mock'

interface UsePostsParams {
  userId?: number
}

export function usePosts({ userId }: UsePostsParams = {}) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    try {
      const all = mockPosts
      setPosts(all)
      setError(null)
    } catch (e) {
      setError('Не удалось получить посты')
    } finally {
      setLoading(false)
    }
  }, [])

  const filteredByUser = useMemo(() => {
    if (!userId) return posts
    return posts.filter((p) => p.userId === userId)
  }, [posts, userId])

  return { posts: filteredByUser, loading, error }
}
