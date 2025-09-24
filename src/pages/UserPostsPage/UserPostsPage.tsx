import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../../widgets/PostList/PostList'
import { usePosts } from '../../features/PostList/model/hooks/usePosts'

export const UserPostsPage: FC = () => {
  const { id } = useParams()
  const userId = Number(id) || 0
  const { loading, posts } = usePosts({ userId })

  return (
    <div>
<PostList isLoading={loading} posts={posts} />
    </div>
  )
}


