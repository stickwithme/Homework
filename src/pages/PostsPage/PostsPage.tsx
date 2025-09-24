import type { FC } from 'react'
import PostList from '../../widgets/PostList/PostList'
import { usePosts } from '../../features/PostList/model/hooks/usePosts'

const PostsPage: FC = () => {
  const { loading, posts } = usePosts()
  return <PostList isLoading={loading} posts={posts} />
}

export { PostsPage }
